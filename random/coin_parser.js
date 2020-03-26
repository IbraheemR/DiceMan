import { coin } from "../generators";

import { coin as coinConfig, messages } from "../config";

export const pattern = /^(?<quantity>[0-9]+)?coins?/i
export const run = (regex, error) => {
    let results = []

    let { quantity = 1 } = regex.groups;

    if (quantity > coinConfig.MAX_QUNATITY) {
        error(messages.types.ERROR, coinConfig.errors.MAX_QUANTITY_EXCEEDED(regex.input, coinConfig.MAX_QUNATITY))
        return
    } else {

        for (let i = 0; i < quantity; i++) {
            results.push(coin())
        }
    }

    return results;
}