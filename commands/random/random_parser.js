// import * as generators from "../generators";

import { messages } from "../../config"

import * as dice from "./parsers/dice_parser";
import * as coin from "./parsers/coin_parser";
import * as card from "./parsers/card_parser";
import * as dreidel from "./parsers/dreidel_parser";



export const commandTypes = [
  dice, coin, card, dreidel
]

export function parse(text, errorHandler) {

  if (typeof text !== 'string') { errorHandler(messages.types.ERROR, messages.errors.MALFORMED()) };

  let commands = text.match(/([^, ]+|,)/gi); // split by comma

  if (commands.length > messages.MAX_COMMANDS) {
    errorHandler(messages.types.ERROR, messages.errors.COMMAND_LIMIT())
  }

  let results = commands.map(action => {

    if (action == ",") {
      return NEW_GROUP;
    }

    for (let type of commandTypes) {
      let match = action.match(type.pattern);
      if (match) {

        console.log(`${action} -> ${type.pattern}`);

        return type.run(match, errorHandler);
      }
    }

    errorHandler(messages.types.ERROR, messages.errors.MALFORMED(action));
  })

  return results;
}

