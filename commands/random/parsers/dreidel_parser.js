import { dreidel } from "../generators";

import { random as randomConfig, messages } from "../../../config";

export const pattern = /^(?<quantity>[0-9]+)?(?:dreidel|ddl)s?/i
export const run = (regex, error) => {
    let results = []

    let { quantity = 1 } = regex.groups;

    if (quantity > randomConfig.MAX_QUANTITY) {
        console.log(times)
        error(messages.types.ERROR, randomConfig.errors.MAX_QUANTITY_EXCEEDED(regex.input, randomConfig.MAX_QUANTITY))
        return
    } else {

        for (let i = 0; i < quantity; i++) {
            results.push(dreidel())
        }
    }

    return results;
}