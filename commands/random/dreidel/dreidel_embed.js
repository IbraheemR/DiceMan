import { MessageEmbed } from "discord.js";
import { messages, random as randomConfig } from "../../../config";

export default (regex, results) => {
    let embed = new MessageEmbed()
        .setColor(messages.colors.INFO)
        .setDescription(
            randomConfig.dreidel.reply.result(
                regex.input,
                results
            )
        )

    return embed;
}