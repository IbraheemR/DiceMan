import helpEmbeds from "./help_embed"

import { messages } from "../../config";

export default class {
    constructor(client) {
        this.embeds = helpEmbeds(client)
    }

    send(msg, errorHandler) { // General help
        if (msg.channel.type !== "dm") {
            msg.reply("help is on its way! Check your DMs.")
        }
        if (msg.author) msg.author.send({ embed: this.embeds.main });
    }

    thing(thing, msg, errorHandler) {
        if (!this.embeds[thing]) {
            errorHandler(messages.types.ERROR, messages.errors.BAD_HELP(thing))
            return
        }

        if (msg.channel.type !== "dm") {
            msg.reply("help is on its way! Check your DMs.")
        }
        if (msg.author) msg.author.send({ embed: this.embeds[thing] });
    }
}