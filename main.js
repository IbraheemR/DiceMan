import Discord from "discord.js";
const client = new Discord.Client();

// TODO: add logging

import HelpParser from "./commands/help/HelpParser";
import * as randomParser from "./commands/random/random_parser";
import errorDispatcher from "./errors/error_dispatcher";

let help_parser;

let commandHandlers = []

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)

    commandHandlers.push(new HelpParser(client));
    commandHandlers.push(randomParser);

});

client.on('message', msg => {
    if (msg.author.bot) return;

    let errors = [];
    let errorHandler = (type, msg) => errors.push([type, msg])

    let content = msg.content.trim()
    let handle = `<@!${client.user.id}>`

    if (msg.mentions.has(client.user) || msg.channel.type == "dm") {
        content = content.replace(handle, "")

        for (let handler of commandHandlers) {
            if (handler.run(msg, content, errorHandler)) break;
        }

    }

    if (errors.length > 0) {
        errorDispatcher(msg, errors)
    }
});

client.login(process.env.TOKEN)
    .catch(console.error)
