import { Option, Cards } from './constants';

export const drawCard = () => {
  return Cards[Math.floor(Math.random() * Cards.length)];
};

export const canSplit = player => {
  return player.length === 2 && player[0] === player[1];
};

export const isSoft = player => {
  return player.some(card => card === 'A');
};

export const playerTotal = player => {
  return player.reduce((total, card) => {
    return total + toNumber(card);
  }, 0);
};

export const toNumber = card => {
  if (card === 'A') {
    return 11;
  }
  if (card === 'J' || card === 'Q' || card === 'K') {
    return 10;
  }
  if (parseInt(card) < 11 && parseInt(card) > 1) {
    return parseInt(card);
  }
  console.error('Invalid card.', card);
  return null;
};

export const correctAction = (dealer, player, isSoft, canSplit) => {

  if (canSplit) { // splits

    if (player === 22) {
      return Option.Split;
    }
    if (player === 18) {
      if (dealer < 10 && dealer !== 7) {
        return Option.Split;
      }
    }
    if (player === 16) {
      return Option.Split;
    }
    if (player === 14 || player === 6 || player === 4) {
      if (dealer < 8) {
        return Option.Split;
      }
    }
    if (player === 12) {
      if (dealer < 7) {
        return Option.Split;
      }
    }
    if (player === 8) {
      if (dealer === 5 || dealer === 6) {
        return Option.Split;
      }
    }
  }

  if (isSoft) { // any soft totals (has an Ace)

    if (player === 21 || player === 20) {
      return Option.Stand;
    }
    if (player === 19) {
      return dealer === 6 ? Option.Double : Option.Stand;
    }
    if (player === 18) {
      if (dealer > 1 && dealer < 7) {
        return Option.Double;
      }
      if (dealer === 7 || dealer === 8) {
        return Option.Stand;
      }
      return Option.Hit;
    }
    if (player === 17) {
      return dealer > 2 && dealer < 7 ? Option.Double : Option.Hit;
    }
    if (player === 16 || player === 15) {
      return dealer > 3 && dealer < 7 ? Option.Double : Option.Hit;
    }
    return dealer === 6 || dealer === 5 ? Option.Double : Option.Hit;
  }

  // non-soft totals
  if (player > 16) {
    return Option.Stand;
  }
  if (player > 12) {
    return dealer > 6 ? Option.Hit : Option.Stand;
  }
  if (player === 12) {
    if (dealer > 3 && dealer < 7) {
      return Option.Stand;
    }
    return Option.Hit;
  }
  if (player === 11) {
    return Option.Double;
  }
  if (player === 10) {
    return dealer < 10 ? Option.Double : Option.Hit;
  }
  if (player === 9) {
    if (dealer > 2 && dealer < 7) {
      return Option.Double;
    }
  }

  return Option.Hit;

};

export const isDisabled = (option, player) => {
  if (playerTotal(player) > 20) {
    return !canSplit(player);
  }
  if (option === Option.Split) {
    return player.length === 2 && player[0] !== player[1];
  }
  if (option === Option.Double) {
    return player.length !== 2;
  }
  return false;
}
