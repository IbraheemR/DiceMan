// import * as generators from "../generators";

import { messages } from "../../config"

import * as dice from "./dice/dice_parser";
import * as coin from "./coin/coin_parser";
import * as card from "./card/card_parser";
import * as dreidel from "./dreidel/dreidel_parser";


const commandTypes = [
  dice, coin, card, dreidel
]

export const pattern = /.*/;

export function run(msg, text, errorHandler) {
  let commands = text.match(/([^, ]+|,)/gi); // split by comma

  if (commands.length > messages.MAX_COMMANDS) {
    errorHandler(messages.errors.COMMAND_LIMIT())
    return true;
  }

  let replies = []
  let errors = []

  eachCommand: for (let action of commands) {
    for (let type of commandTypes) {
      let match = action.match(type.pattern);
      if (match) {

        console.log(`${action} -> ${type.pattern}`);

        replies.push(
          type.generateReply(
            msg,
            match,
            (error, type) => errors.push([error, type])
          )
        );
        continue eachCommand;
      }
    }
    errors.push([messages.errors.MALFORMED(action)])

  }

  if (errors.length > 0) {
    errors.forEach(error => errorHandler(...error));
  } else {
    replies.forEach(reply => {
      reply()
    })
  }

  return true
}

