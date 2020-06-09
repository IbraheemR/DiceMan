import { MessageEmbed } from "discord.js";
import { messages, random as randomConfig } from "../../../config";

export default (regex, results) => {
    let subtotal = results.reduce((a, b) => a + b)

    let embed = new MessageEmbed()
        .setColor(messages.colors.INFO)
        .setDescription(
            randomConfig.dice.reply.result(
                regex.input,
                results
            ) + "\n" + randomConfig.dice.reply.total(
                subtotal,
                regex.groups
            )
        )

    return embed;
}