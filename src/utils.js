import { Option } from './constants';

export const correctAction = (dealer, player) => {

  if (player.canSplit()) { // splits

    if (player.total() === 12) { // Aces
      return Option.Split;
    }
    if (player.total() === 18) {
      if (dealer.cards[0] < 10 && dealer.cards[0] !== 7) {
        return Option.Split;
      }
    }
    if (player.total() === 16) {
      return Option.Split;
    }
    if (player.total() === 14 || player.total() === 6 || player.total() === 4) {
      if (dealer.cards[0] < 8) {
        return Option.Split;
      }
    }
    if (player.total() === 12) {
      if (dealer.cards[0] < 7) {
        return Option.Split;
      }
    }
    if (player.total() === 8) {
      if (dealer.cards[0] === 5 || dealer.cards[0] === 6) {
        return Option.Split;
      }
    }
  }

  if (player.isSoft()) { // any soft totals (has an Ace)

    if (player.total() === 21 || player.total() === 20) {
      return Option.Stand;
    }
    if (player.total() === 19) {
      return dealer.cards[0] === 6 ? Option.Double : Option.Stand;
    }
    if (player.total() === 18) {
      if (dealer.cards[0] > 1 && dealer.cards[0] < 7) {
        return Option.Double;
      }
      if (dealer.cards[0] === 7 || dealer.cards[0] === 8) {
        return Option.Stand;
      }
      return Option.Hit;
    }
    if (player.total() === 17) {
      return dealer.cards[0] > 2 && dealer.cards[0] < 7 ? Option.Double : Option.Hit;
    }
    if (player.total() === 16 || player.total() === 15) {
      return dealer.cards[0] > 3 && dealer.cards[0] < 7 ? Option.Double : Option.Hit;
    }
    return dealer.cards[0] === 6 || dealer.cards[0] === 5 ? Option.Double : Option.Hit;
  }

  // non-soft totals
  if (player.total() > 16) {
    return Option.Stand;
  }
  if (player.total() > 12) {
    return dealer.cards[0] > 6 ? Option.Hit : Option.Stand;
  }
  if (player.total() === 12) {
    if (dealer.cards[0] > 3 && dealer.cards[0] < 7) {
      return Option.Stand;
    }
    return Option.Hit;
  }
  if (player.total() === 11) {
    return Option.Double;
  }
  if (player.total() === 10) {
    return dealer.cards[0] < 10 ? Option.Double : Option.Hit;
  }
  if (player.total() === 9) {
    if (dealer.cards[0] > 2 && dealer.cards[0] < 7) {
      return Option.Double;
    }
  }

  return Option.Hit;

};

export const isDisabled = (option, player) => {
  if (player.total() > 20 || option === Option.Split) {
    return !player.canSplit();
  }
  if (option === Option.Double) {
    return player.cards.length !== 2;
  }
  return false;
};
