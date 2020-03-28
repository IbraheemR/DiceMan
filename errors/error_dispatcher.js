import { MessageEmbed } from "discord.js";
import { messages as messageConfig } from "../config";

export default (msg, errors) => {
    errors.forEach(([error, type = messageConfig.types.ERROR]) => {
        let embed = new MessageEmbed()
            .setColor(messageConfig.colors[type])
            .setTitle(`${type}: ${error}`);

        console.log(type, "asf", error)

        msg.channel.send({ embed })
    });
}