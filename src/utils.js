import { Option, Cards } from './constants';

export const drawCard = () => {
  return Cards[Math.floor(Math.random() * Cards.length)];
};

export const correctAction = (dealer, player) => {
  const toNumber = card => {
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

  const dealerCard = toNumber(dealer);
  const playerTotal = player.reduce((total, card) => {
    return total + toNumber(card);
  }, 0);

  const isSoft = player.some(card => card === 'A');
  const canSplit = player.length === 2 && player[0] === player[1];

  if (isSoft) { // any soft totals (has an Ace)

    if (canSplit) { // split Aces
      return Option.Split;
    }

    if (playerTotal === 21 || playerTotal === 20) {
      return Option.Stand;
    }

    if (playerTotal === 19) {
      return dealerCard === 6 ? Option.Double : Option.Stand;
    }

    if (playerTotal === 18) {
      if (dealerCard > 1 && dealerCard < 7) {
        return Option.Double;
      }
      if (dealerCard === 7 || dealerCard === 8) {
        return Option.Stand;
      }
      return Option.Hit;
    }

    if (playerTotal === 17) {
      return dealerCard > 2 && dealerCard < 7 ? Option.Double : Option.Hit;
    }

    if (playerTotal === 16 || playerTotal === 15) {
      return dealerCard > 3 && dealerCard < 7 ? Option.Double : Option.Hit;
    }

    return dealerCard === 6 || dealerCard === 5 ? Option.Double : Option.Hit;

  }

  // non-soft totals and splits
  if (playerTotal > 16) {
    if (canSplit && playerTotal === 18) {
      if (dealerCard < 10 && dealerCard !== 7) {
        return Option.Double;
      }
    }
    return Option.Stand;
  }

  if (playerTotal > 12) {
    return dealerCard > 6 ? Option.Hit : Option.Stand;
  }

  if (playerTotal === 12) {
    if (dealerCard > 3 && dealerCard < 7) {
      return Option.Stand;
    }
    return Option.Hit;
  }

  if (playerTotal === 11) {
    return Option.Double;
  }

  if (playerTotal === 10) {
    return dealerCard < 10 ? Option.Double : Option.Hit;
  }

  if (playerTotal === 9) {
    if (dealerCard > 2 && dealerCard < 7) {
      return Option.Double;
    }
  }

  return Option.Hit;

}