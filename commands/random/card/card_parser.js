
import { random as randomConfig, messages } from "../../../config";

export const pattern = /^(?<quantity>[0-9]+)?cards?$/i
export const generateReply = (msg, regex, error) => {
    let results = []

    let { quantity = 1 } = regex.groups

    // Generate

    if (quantity > randomConfig.card.MAX_QUANTITY) {
        error(randomConfig.card.errors.MAX_QUANTITY_EXCEEDED(regex.input, randomConfig.card.MAX_QUANTITY))
        return
    }

    let deck = []

    for (let suit of Object.keys(randomConfig.card.suits)) {
        for (let symbol of Object.keys(randomConfig.card.symbols)) {
            deck.push([suit, symbol])
        }
    }

    for (let i = 0; i < quantity; i++) {
        results.push(
            ...deck.splice(Math.floor(Math.random() * deck.length), 1)
        )
    }

    console.log(results)


    // Return message dispatcher

    return () => { }
}