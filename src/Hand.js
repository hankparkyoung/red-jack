import { drawCard } from './constants';

export function Hand() {
  this.cards = [drawCard(), drawCard()];
  this.isBlackjack = () => {
    return this.cards.length === 2 && this.total() === 21;
  };
  this.canSplit = () => {
    const numCards = this.cards.map(card => {
      if (card === 'A') {
        return 11;
      }
      if (card === 'K' || card === 'Q' || card === 'J') {
        return 10;
      }
      return parseInt(card);
    })
    return this.cards.length === 2 && numCards[0] === numCards[1];
  };
  this.isSoft = () => {
    return this.cards.some(card => card === 'A');
  };
  this.total = () => {
    return this.cards.reduce((total, card) => {
      if (card === 'A') {
        return total + 11;
      }
      if (card === 'K' || card === 'Q' || card === 'J') {
        return total + 10;
      }
      return total + parseInt(card);
    }, 0);
  };
};
