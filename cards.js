class Deck {
  constructor() {
    this.suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.deck = [];
    this.players = [];
    this.numPlayers = 0;
  }

  createDeck() {
    let deck = [];
    this.suits.forEach((suit) => {
      const cards = this.numbers.map((num) => {
        return { suit: suit, num: num };
      });
      deck = [...deck, ...cards];
    });

    this.deck = deck;
  }

  shuffle() {
    // 1. iterate through the deck
    // 2. swap the card with another card at random position
    const deck = this.deck;

    for (let i = 0; i < deck.length; i++) {
      const j = Math.floor(Math.random() * deck.length);
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    console.log('this.deck: ', this.deck);
  }

  deal(num) {
    this.players.forEach((player) => {
      for (let i = 0; i < num; i++) {
        player.hand.push(this.deck.shift());
      }
    });

    return this.players;
  }

  createPlayers(num) {
    this.numPlayers = num;
    let i = 0;
    while (i < num) {
      this.players.push({
        num: i,
        points: 0,
        hand: [],
      });
      i++;
    }

    return this.players;
  }
}

const poker = new Deck();
console.log(poker.createDeck());
console.log(poker.shuffle());
console.log(poker.createPlayers(3));
console.log(poker.deal(5));
console.log(poker.players[0].hand);
