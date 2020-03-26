import { parse } from "./random/random_parser";

import Discord from "discord.js";
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
    // TODO set help command activity
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }

    parse(msg.content);

    console.log(msg.content)
});

client.login(process.env.TOKEN)
