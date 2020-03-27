import helpEmbeds from "./help_embed"

import { messages } from "../../config";

export default class {
    pattern = /^help ?(?<thing>.*)?/i

    constructor(client) {
        this.embeds = helpEmbeds(client)
    }

    run(msg, text, errorHandler) {
        let helpMatch = text.match(this.pattern)

        if (!helpMatch) return false;

        return this.send(helpMatch.groups.thing || "main", msg, errorHandler);

    }

    send(thing, msg, errorHandler) {
        if (!this.embeds[thing]) {
            errorHandler(messages.types.ERROR, messages.errors.BAD_HELP(thing))

        } else {
            if (msg.channel.type !== "dm") {
                msg.reply("help is on its way! Check your DMs.")
            }

            if (msg.author) msg.author.send({ embed: this.embeds[thing] });
        }

        return true
    }
}