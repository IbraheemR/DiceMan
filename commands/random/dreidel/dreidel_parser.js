import { dreidel } from "../generators";
import dreidelEmbed from "./dreidel_embed";


import { random as randomConfig, messages } from "../../../config";

export const pattern = /^(?<quantity>[0-9]+)?(?:dreidel|ddl)s?$/i
export const generateReply = (msg, regex, error) => {
    let results = []

    let { quantity = 1 } = regex.groups;

    // Generate

    if (quantity > randomConfig.dreidel.MAX_QUANTITY) {
        error(randomConfig.dreidel.errors.MAX_QUANTITY_EXCEEDED(regex.input, randomConfig.dreidel.MAX_QUANTITY))
    } else {

        for (let i = 0; i < quantity; i++) {
            results.push(dreidel())
        }
    }

    // Return message dispatcher

    return () => msg.reply({ embed: dreidelEmbed(regex, results) })

}