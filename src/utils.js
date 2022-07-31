import { Action, Cards } from './constants';

export const drawCard = () => {
  return Cards[Math.floor(Math.random() * Cards.length)];
};

export const correctAction = (dealer, player) => {
  // dealer single card, player card array of 2
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
  const playerTotal = toNumber(player[0]) + toNumber(player[1]);

  const isSoft = player.some(card => card === 'A');
  const canSplit = player[0] === player[1];

  if (isSoft) { // any soft totals (has an Ace)

    if (canSplit) { // split Aces
      return Action.Split;
    }

    if (playerTotal === 21 || playerTotal === 20) {
      return Action.Stand;
    }

    if (playerTotal === 19) {
      return dealerCard === 6 ? Action.Double : Action.Stand;
    }

    if (playerTotal === 18) {
      if (dealerCard > 1 && dealerCard < 7) {
        return Action.Double;
      }
      if (dealerCard === 7 || dealerCard === 8) {
        return Action.Stand;
      }
      return Action.Hit;
    }

    if (playerTotal === 17) {
      return dealerCard > 2 && dealerCard < 7 ? Action.Double : Action.Hit;
    }

    if (playerTotal === 16 || playerTotal === 15) {
      return dealerCard > 3 && dealerCard < 7 ? Action.Double : Action.Hit;
    }

    return dealerCard === 6 || dealerCard === 5 ? Action.Double : Action.Hit;

  }

  // non-soft totals and splits
  if (playerTotal > 17) {
    if (canSplit && playerTotal === 18) {
      if (dealerCard < 10 && dealerCard !== 7) {
        return Action.Double;
      }
    }
    return Action.Stand;
  }

  if (playerTotal > 12) {
    return dealerCard > 6 ? Action.Hit : Action.Stand;
  }

  if (playerTotal === 12) {
    if (dealerCard > 3 && dealerCard < 7) {
      return Action.Stand;
    }
    return Action.Hit;
  }

  if (playerTotal === 11) {
    return Action.Double;
  }

  if (playerTotal === 10) {
    return dealerCard < 10 ? Action.Double : Action.Hit;
  }

  if (playerTotal === 9) {
    if (dealerCard > 2 && dealerCard < 7) {
      return Action.Double;
    }
  }

  return Action.Hit;

}