import Discord from "discord.js";
const client = new Discord.Client();

// TODO: add logging

import HelpParser from "./commands/help/HelpParser";
import * as randomParser from "./commands/random/random_parser";
import errorDispatcher from "./errors/error_dispatcher";

import { mention } from "./util";
import { messages } from "./config";

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

    let content = msg.content.trim()
    let handle = mention(client.user)

    if (msg.mentions.has(client.user) || msg.channel.type == "dm") {
        content = content.replace(handle, "")

        let done = false;

        for (let handler of commandHandlers) {
            done = handler.run(
                msg,
                content,
                (error, type) => errors.push([error, type])
            )
            if (done) break;
        }

        if (!done) errors.push([messages.errors.MALFORMED(content)]);
    }

    if (errors.length > 0) {
        errorDispatcher(msg, errors)
    }
});


console.log("Attempting to login.")
client.login(process.env.TOKEN)
    .catch(console.error)
