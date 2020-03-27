import { coin } from "../generators";

import { random as randomConfig, messages } from "../../../config";

export const pattern = /^(?<quantity>[0-9]+)?coins?$/i
export const run = (regex, error) => {
    let results = []

    let { quantity = 1 } = regex.groups;

    if (quantity > randomConfig.coin.MAX_QUNATITY) {
        error(messages.types.ERROR, random.coin.errors.MAX_QUANTITY_EXCEEDED(regex.input, random.coin.MAX_QUNATITY))
        return
    } else {

        for (let i = 0; i < quantity; i++) {
            results.push(coin())
        }
    }

    return results;
}