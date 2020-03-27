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
    errorHandler(messages.types.ERROR, messages.errors.COMMAND_LIMIT())
    return true;
  }

  commands.forEach(action => {

    if (action == ",") {
      return NEW_GROUP;
    }

    for (let type of commandTypes) {
      let match = action.match(type.pattern);
      if (match) {

        console.log(`${action} -> ${type.pattern}`);

        msg.reply(JSON.stringify(type.run(match, errorHandler)));
        return true;
      }
    }

    errorHandler(messages.types.ERROR, messages.errors.MALFORMED(action));
    return true;
  });
}

