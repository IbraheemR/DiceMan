import { dreidel } from "../generators";

import { dreidel as dreidelConfig, messages } from "../config";

export const pattern = /^(?:dreidel|ddl)(?:x?([0-9]+))?/i
export const run = ([action, times = 1], error) => {
    let results = []

    if (times > dreidelConfig.maxTimes) {
        console.log(times)
        error(messages.types.ERROR, dreidelConfig.errors.MAX_TIMES_EXCEEDED(action, dreidelConfig.maxTimes))
        return
    } else {

        for (let i = 0; i < times; i++) {
            results.push(dreidel())
        }
    }

    return results;
}