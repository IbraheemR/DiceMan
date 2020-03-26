import { dreidel } from "../generators";

import { dreidel as dreidelConfig, messages } from "../config";

export const pattern = /^(?<quantity>[0-9]+)?(?:dreidel|ddl)/i
export const run = (regex, error) => {
    let results = []

    let { quantity = 1 } = regex.groups;

    if (quantity > dreidelConfig.MAX_QUANTITY) {
        console.log(times)
        error(messages.types.ERROR, dreidelConfig.errors.MAX_QUANTITY_EXCEEDED(regex.input, dreidelConfig.MAX_QUANTITY))
        return
    } else {

        for (let i = 0; i < quantity; i++) {
            results.push(dreidel())
        }
    }

    return results;
}