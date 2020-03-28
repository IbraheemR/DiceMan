import { coin } from "../generators";
import coinEmbed from "./coin_embed";


import { random as randomConfig, messages } from "../../../config";

export const pattern = /^(?<quantity>[0-9]+)?coins?$/i
export const generateReply = (msg, regex, error) => {
    let results = []

    let { quantity = 1 } = regex.groups;

    // Generate

    if (quantity > randomConfig.coin.MAX_QUNATITY) {
        error(randomConfig.coin.errors.MAX_QUANTITY_EXCEEDED(regex.input, randomConfig.coin.MAX_QUNATITY))
        return
    } else {

        for (let i = 0; i < quantity; i++) {
            results.push(coin())
        }
    }

    // Return message dispatcher

    return () => msg.reply({ embed: coinEmbed(regex, results) })

}