import { dice } from "../generators";

import { random as randomConfig, messages } from "../../../config";

export const pattern = /^(?<quantity>[0-9]+)?(d|dice|die)(?<type>[0-9]+)?/i;
export const run = (regex, error) => {
    let { quantity = 1, type = 6 } = regex.groups

    let results = [];

    if (quantity > randomConfig.dice.MAX_QUANTITY) {
        error(messages.types.ERROR, randomConfig.dice.errors.MAX_QUANTITY_EXCEEDED(regex.input, randomConfig.dice.MAX_QUANTITY))
        return
    } else {
        for (let i = 0; i < quantity; i++) {
            results.push(dice(type))
        }
    }

    return results;
}