import { MessageEmbed } from "discord.js";
import { messages, random as randomConfig } from "../../../config";

export default (regex, results) => new MessageEmbed()
    .setColor(messages.colors.INFO)
    .setDescription(
        randomConfig.coin.reply.result(
            regex.input,
            results
        ) + "\n" + randomConfig.coin.reply.total(
            results
        )
    )
