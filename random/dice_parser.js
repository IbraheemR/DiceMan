import { dice } from "../generators";

import { dice as diceConfig, messages } from "../config";

export const pattern = /^(?<quantity>[0-9]+)?(d|dice|die)(?<type>[0-9]+)/i;
export const run = (regex, error) => {
    let { quantity = 1, type } = regex.groups

    let results = [];

    if (quantity > diceConfig.MAX_QUANTITY) {
        error(messages.types.ERROR, diceConfig.errors.MAX_QUANTITY_EXCEEDED(regex.input, diceConfig.MAX_QUANTITY))
        return
    } else {
        for (let i = 0; i < quantity; i++) {
            results.push(dice(type))
        }
    }

    return results;
}