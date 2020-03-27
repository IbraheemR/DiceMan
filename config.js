export const messages = {
  NEW_GROUP: "NEW_GROUP",
  MAX_COMMANDS: 40,
  types: {
    ERROR: "ERROR",
    WARN: "WARN",
    INFO: "INFO",
  },
  colors: {
    ERROR: "#dd162d",
    WARN: "#ed8c15",
    INFO: "#2a5b21",
  },
  errors: {
    COMMAND_LIMIT: (max) => `Too many commands entered. Max ${max} allowed`,
    COMMAND_RANGE: (action, max) => `Cannot ${action} more than ${max} times`,
    MALFORMED: (action) => "I don't know what you mean" + (action ? ` by \`${action}\`.` : "."),
    BAD_HELP: (thing) => `I don't know how to help you with \`${thing}\`. Try \`@DiceMan help\``
  }
}

export const random = {
  dice: {
    MAX_QUANTITY: 10,
    errors: {
      MAX_QUANTITY_EXCEEDED: (action, max) => `Cannot roll a dice more than ${max} times` + (action ? ` (\`${action}\`)` : "")
    },
    help: {
      title: "Roll a Dice",
      syntax: ["dice", "<n>dice", "d<x>", "<n>d<x>"],
      description: [
        "Roll a dice in the standard `ndx` format.",
        "`dice` will roll a d6.",
        "`d<x>` will roll an `x` sided dice.",
        "`2d4` will roll 2 d4s and also give you their total."]
    }
  },
  coin: {
    outcomes: {
      HEAD: "HEAD",
      TAIL: "TAIL"
    },
    MAX_QUNATITY: 100,
    errors: {
      MAX_QUANTITY_EXCEEDED: (action, max) => `Cannot flip a coin more than ${max} times` + (action ? ` (\`${action}\`)` : "")
    },
    help: {
      title: "Flip a Coin",
      syntax: ["coin", "<n>coin", "<n>coins"],
      description: ["Flip a single or `n` fair coins.", "E.g `4coins`"]
    }
  },
  card: {
    suits: {
      SPADES: "SPADES",
      HEARTS: "HEARTS",
      CLUBS: "CLUBS",
      DIAMONDS: "DIAMONDS"
    },
    symbols: {
      ACE: "ACE",

      TWO: 2,
      THREE: 3,
      FOUR: 4,
      FIVE: 5,
      SIX: 6,
      SEVEN: 7,
      EIGHT: 8,
      NINE: 9,
      TEN: 10,

      JACK: "JACK",
      QUEEN: "QUEEN",
      KING: "KING"
    },
    MAX_QUANTITY: 52,
    errors: {
      MAX_QUANTITY_EXCEEDED: (action) => `Cannot draw more than 52 cards from the same card deck` + (action ? ` (\`${action}\`)` : "")
    },
    help: {
      title: "Draw a Card",
      syntax: ["card", "<n>card", "<n>cards"],
      description: [
        "Draw a single or `n` cards from a standard 52 card deck.",
        "`4cards` will draw 4 cards from the same deck.",
        "For more advanced deck management use the `deck` command"]
    }
  },
  dreidel: {
    outcomes: {
      NUN: "NUN",
      GIMEL: "GIMEL",
      HEY: "HEY",
      SHIN: "SHIN"
    },
    MAX_QUANTITY: 10,
    errors: {
      MAX_QUANTITY_EXCEEDED: (action, max) => `The Dreidel broke! Cannot spin more than ${max} times` + (action ? ` (\`${action}\`)` : "")
    },
    help: {
      title: "Spin a Dreidel",
      syntax: ["dreidel", "<n>dreidels", "<n>ddl",],
      description: ["Spin a single or `n` dreidels", "E.g `4dreidels`, `2ddl`"]
    }
  }
}