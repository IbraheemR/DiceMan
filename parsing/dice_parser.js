import { dice } from "../generators";

import { dice as diceConfig, messages } from "../config";

export const pattern = /^d([0-9]+)(?:x([0-9]+))?/i;
export const run = ([action, n, times = 1], error) => {
    let results = []


    if (times > diceConfig.maxTimes) {
        error(messages.types.ERROR, diceConfig.errors.MAX_TIMES_EXCEEDED(action, diceConfig.maxTimes))
        return
    } else {
        for (let i = 0; i < times; i++) {
            results.push(dice(n))
        }
    }

    return results;
}