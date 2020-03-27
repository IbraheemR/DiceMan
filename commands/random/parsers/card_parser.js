import { card } from "../generators";

import { random as randomConfig, messages } from "../../../config";

export const pattern = /^(?<quantity>[0-9]+)?card/i
export const run = (regex, error) => {
    let results = []

    let { quantity = 1 } = regex.groups

    if (quantity > randomConfig.card.MAX_QUANTITY) {
        error(messages.types.ERROR, randomConfig.card.errors.MAX_QUANTITY_EXCEEDED(regex.input, randomConfig.card.MAX_QUANTITY))
        return
    } else {

        // TODO: optimise by drawing from same deck instead of randomly trying again and again

        for (let i = 0; i < quantity; i++) {
            let new_card;
            while (true) {
                new_card = card()

                // Check for duplicates
                let contains = false;
                for (let old_card of results) {
                    if (old_card[0] == new_card[0] && old_card[1] == new_card[1]) {
                        contains = true
                        break
                    }
                }

                if (!contains) {
                    results.push(new_card)
                    break
                };
            }
        }
    }

    return results;
}