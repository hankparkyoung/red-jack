import { Option } from './constants';

export const toNumber = card => {
  if (card === 'A') {
    return 11;
  }
  if (card === 'K' || card === 'Q' || card === 'J') {
    return 10;
  }
  return parseInt(card);
};

export const correctAction = (dealer, player) => { // dealer num and player Hand obj

  if (player.canSplit()) { // splits

    if (player.total() === 12) { // Aces
      return Option.Split;
    }
    if (player.total() === 18) {
      if (dealer < 10 && dealer !== 7) {
        return Option.Split;
      }
    }
    if (player.total() === 16) {
      return Option.Split;
    }
    if (player.total() === 14 || player.total() === 6 || player.total() === 4) {
      if (dealer < 8) {
        return Option.Split;
      }
    }
    if (player.total() === 12) {
      if (dealer < 7) {
        return Option.Split;
      }
    }
    if (player.total() === 8) {
      if (dealer === 5 || dealer === 6) {
        return Option.Split;
      }
    }
  }

  if (player.isSoft()) { // any soft totals (has an Ace)

    if (player.total() === 21 || player.total() === 20) {
      return Option.Stand;
    }
    if (player.total() === 19) {
      return dealer === 6 ? Option.Double : Option.Stand;
    }
    if (player.total() === 18) {
      if (dealer > 1 && dealer < 7) {
        return Option.Double;
      }
      if (dealer === 7 || dealer === 8) {
        return Option.Stand;
      }
      return Option.Hit;
    }
    if (player.total() === 17) {
      return dealer > 2 && dealer < 7 ? Option.Double : Option.Hit;
    }
    if (player.total() === 16 || player.total() === 15) {
      return dealer > 3 && dealer < 7 ? Option.Double : Option.Hit;
    }
    return dealer === 6 || dealer === 5 ? Option.Double : Option.Hit;
  }

  // non-soft totals
  if (player.total() > 16) {
    return Option.Stand;
  }
  if (player.total() > 12) {
    return dealer > 6 ? Option.Hit : Option.Stand;
  }
  if (player.total() === 12) {
    if (dealer > 3 && dealer < 7) {
      return Option.Stand;
    }
    return Option.Hit;
  }
  if (player.total() === 11) {
    return Option.Double;
  }
  if (player.total() === 10) {
    return dealer < 10 ? Option.Double : Option.Hit;
  }
  if (player.total() === 9) {
    if (dealer > 2 && dealer < 7) {
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
