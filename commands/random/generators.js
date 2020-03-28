import * as config from "../../config"

// TODO: move this with individual parsers

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
  return randChoice(Object.values(config.random.coin.outcomes));
}

export function dreidel() {
  return randChoice(Object.values(config.random.dreidel.outcomes))
}