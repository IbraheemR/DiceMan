// import * as generators from "../generators";

import { messages } from "../config"

import * as dice from "./dice_parser";
import * as coin from "./coin_parser";
import * as card from "./card_parser";
import * as dreidel from "./dreidel_parser";



const commandTypes = [
  dice, coin, card, dreidel
]

export function parse(text) {
  let errors = []
  let error = (type, msg) => errors.push([type, msg])


  if (typeof text !== 'string') { error(messages.types.ERROR, messages.errors.MALFORMED()) };

  let commands = text.match(/([^, ]+|,)/gi); // split by comma

  if (commands.length > messages.maxCommands) {
    error(messages.types.ERROR, messages.errors.COMMAND_LIMIT())
  }

  let results = commands.map(action => {

    if (action == ",") {
      return NEW_GROUP;
    }

    for (let type of commandTypes) {
      let match = action.match(type.pattern);
      if (match) {

        console.log(`${action} -> ${type.pattern}`);

        return type.run(match, error);
      }
    }

    error(messages.types.ERROR, messages.errors.MALFORMED(action));
  })

  console.log(errors);
  console.log(results);

  return errors, results;
}

