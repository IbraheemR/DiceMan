export const messages = {
  NEW_GROUP: Symbol("new group"),
  maxCommands: 40,
  types: {
    ERROR: Symbol("fatal"),
    WARN: Symbol("warm"),
    INFO: Symbol("info"),
  },
  errors: {
    COMMAND_LIMIT: (max) => `Too many commands entered. Max ${max} allowed`,
    COMMAND_RANGE: (action, max) => `Cannot ${action} more than ${max} times`,
    MALFORMED: (action) => "Command malformed" + (action ? ` (\`${action}\`)` : "")
  }
}

export const dice = {
  maxTimes: 10,
  errors: {
    MAX_TIMES_EXCEEDED: (action, max) => `Cannot roll a dice more than ${max} times` + (action ? ` (\`${action}\`)` : "")
  }
}

export const coin = {
  outcomes: {
    HEAD: Symbol("head"),
    TAIL: Symbol("tail")
  },

  maxTimes: 100,
  errors: {
    MAX_TIMES_EXCEEDED: (action, max) => `Cannot flip a coin more than ${max} times` + (action ? ` (\`${action}\`)` : "")
  }
}

export const dreidel = {
  outcomes: {
    NUN: Symbol("nun"),
    GIMEL: Symbol("gimel"),
    HEY: Symbol("hey"),
    SHIN: Symbol("shin")
  },
  maxTimes: 10,
  errors: {
    MAX_TIMES_EXCEEDED: (action, max) => `The Dreidel broke! Cannot spin more than ${max} times` + (action ? ` (\`${action}\`)` : "")
  }
}

export const card = {
  suits: {
    SPADES: Symbol("spades"),
    HEARTS: Symbol("hearts"),
    CLUBS: Symbol("clubs"),
    DIAMONDS: Symbol("diamonds")
  },
  symbols: {
    ACE: Symbol("ace"),

    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,

    JACK: Symbol("jack"),
    QUEEN: Symbol("queen"),
    KING: Symbol("king")
  },
  maxTimes: 52,
  errors: {
    MAX_TIMES_EXCEEDED: (action) => `Cannot draw more than 52 cards from the same card deck` + (action ? ` (\`${action}\`)` : "")
  }
}