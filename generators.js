import * as config from "./config"


export function randInt(n) {
  return Math.floor(Math.random() * n)
}

export function randChoice(arr) {
  return arr[randInt(arr.length)];
}

export function dice(n) {
  return Math.ceil(Math.random() * n)
}

export function coin() {
  return randChoice(Object.values(config.coin.outcomes));
}

export function card() {
  let suit = randChoice(Object.values(config.card.suits))
  let number = randChoice(Object.values(config.card.symbols))

  return [suit, number]
}


export function dreidel() {
  return randChoice(Object.values(config.dreidel.outcomes))
}