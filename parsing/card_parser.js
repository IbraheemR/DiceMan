import { card } from "../generators";

import { card as cardConfig, messages } from "../config";

export const pattern = /^card(?:x?([0-9]+))?/i
export const run = ([action, times = 1], error) => {
    let results = []

    if (times > cardConfig.maxTimes) {
        error(messages.types.ERROR, cardConfig.errors.MAX_TIMES_EXCEEDED(action, cardConfig.maxTimes))
        return
    } else {

        // TODO: optimise by drawing from same deck instead of randomly trying again and again

        for (let i = 0; i < times; i++) {
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