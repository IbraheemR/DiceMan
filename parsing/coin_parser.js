import { coin } from "../generators";

import { coin as coinConfig, messages } from "../config";

export const pattern = /^coin(?:x?([0-9]+))?/i
export const run = ([action, times = 1], error) => {
    let results = []

    if (times > coinConfig.maxTimes) {
        error(messages.types.ERROR, coinConfig.errors.MAX_TIMES_EXCEEDED(action, coinConfig.maxTimes))
        return
    } else {

        for (let i = 0; i < times; i++) {
            results.push(coin())
        }
    }

    return results;
}