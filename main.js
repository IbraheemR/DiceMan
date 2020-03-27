import Discord from "discord.js";
const client = new Discord.Client();

import Helper from "./commands/help/HelpDispatcher";
import { parse as parse_random_command } from "./commands/random/random_parser";
import errorDispatcher from "./errors/error_dispatcher";

let helpDispatcher;

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
    helpDispatcher = new Helper(client);
});

client.on('message', msg => {
    if (msg.author.id == client.user.id) return;

    let errors = []
    let errorHandler = (type, msg) => errors.push([type, msg])

    let content = msg.content.trim()

    let handle = `<@!${client.user.id}>`

    if (msg.mentions.has(client.user) || msg.channel.type == "dm") {
        content = content.replace(handle, "")

        if (content.match(/^help/i)) {

            let helpMatch = content.match(/^help ?(?<thing>.*)/i).groups.thing.trim()

            if (!helpMatch) {
                helpDispatcher.send(msg, errorHandler);
            } else {
                helpDispatcher.thing(helpMatch, msg, errorHandler);
            }

        } else {
            console.log(parse_random_command(content, errorHandler))
        }
    }

    if (errors.length > 0) {
        errorDispatcher(msg, errors)
    }
});

client.login(process.env.TOKEN)
