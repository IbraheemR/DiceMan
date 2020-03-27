import { MessageEmbed } from "discord.js";
import { messages as messageConfig } from "../config";

export default (msg, errors) => {
    errors.forEach(([type, error]) => {
        let embed = new MessageEmbed()
            .setColor(messageConfig.colors[type])
            .setTitle(`${type}: ${error}`);

        msg.channel.send({ embed })
    });
}