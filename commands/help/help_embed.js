import { MessageEmbed } from "discord.js";
import { messages, random as randomCommands } from "../../config";

import { mention } from "../../util";

export const main = client => {
    let e = new MessageEmbed()
        .setColor(messages.colors.ERROR)
        .setTitle("DiceMan Help")
        .setThumbnail(client.user.avatarURL())

        .setDescription(`To run a command either DM or mention ${mention(client.user)} anywhere in your message. No prefix required!`)

        .addField("`help`", "**Help**\nShow this message", true)
    // .addField("`deck`", "**Deck management**\n Creates persistent decks to allow you to play games.\nUse `help deck` for more.", true)

    let randomTitle = "Random Generators";
    let randomDescription = "**Include as many random commands in one message as you like. Seperate with spaces, e.g `2dice 1card`\n**";

    for (let { help } of Object.values(randomCommands)) {
        //Pull random commands from config
        if (help) {

            let syntax = help.syntax.map(v => `\`${v}\``).join(" or ")

            randomDescription += `\n** ${help.title} ** ${syntax}\n${help.description.map(v => `- ${v}\n`).join("")}`
        }
    }

    e.addField(randomTitle, randomDescription)


    console.log("Built help embed!")

    return e;
}

export default client => {
    // Main help
    let main = new MessageEmbed()
        .setColor(messages.colors.INFO)
        .setTitle("DiceMan Help")
        .setThumbnail(client.user.avatarURL())

        .setDescription(`To run a command either DM or mention ${mention(client.user)} anywhere in your message. No prefix required!`)

        .addField("`help`", "**Help**\nShow this message", true)
        .addField("`deck`", "**Deck management**\n Creates persistent decks to allow you to play games.\nUse `@DiceMan help deck` for more.", true)

    let randomTitle = "Random Generators";
    let randomDescription = "**Include as many random commands in one message as you like. Seperate with spaces, e.g `@DiceMan 2dice 1card`\n**";

    for (let { help } of Object.values(randomCommands)) {
        //Pull random commands from config
        if (help) {

            let syntax = help.syntax.map(v => `\`${v}\``).join(" or ")

            randomDescription += `\n** ${help.title} ** ${syntax}\n${help.description.map(v => `- ${v}\n`).join("")}`
        }
    }

    main.addField(randomTitle, randomDescription)




    // // Deck help
    // let deck = new MessageEmbed()
    //     .setColor(messages.colors.INFO)
    //     .setTitle("Deck help")
    //     .setDescription("Comming soon!")

    // console.log("Built help embeds!")

    return { main }
}
