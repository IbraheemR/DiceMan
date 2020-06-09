import { dice } from "../generators";
import diceEmbed from "./dice_embed";

import { random as randomConfig, messages } from "../../../config";
let { dice: diceConfig } = randomConfig;

import { mention } from "../../../util"

export const pattern = /^(?<quantity>[0-9]+)?(d|dice|die)(?<type>[0-9]+)?(\+(?<add>[0-9]+))?$/i;
export const generateReply = (msg, regex, error) => {
    let { quantity = 1, type = 6, add } = regex.groups

    let results = [];

    // Generate

    if (quantity > diceConfig.MAX_QUANTITY) {
        error(diceConfig.errors.MAX_QUANTITY_EXCEEDED(regex.input, diceConfig.MAX_QUANTITY))
        return
    } else {
        for (let i = 0; i < quantity; i++) {
            results.push(dice(type))
        }
    }

    // Return message handler

    return () => msg.reply({ embed: diceEmbed(regex, results) })

}