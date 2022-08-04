import { Cards } from './constants';

export function Hand() {
  this.cards = [
    Cards[Math.floor(Math.random() * Cards.length)],
    Cards[Math.floor(Math.random() * Cards.length)],
  ];
  this.drawCard = () => {
    this.cards.push(Math.floor(Math.random() * Cards.length));
  };
  this.isBlackjack = this.cards.length === 2 && this.total === 21;
  this.canSplit = this.cards.length === 2 && this.cards[0] === this.cards[1];
  this.isSoft = this.cards.some(card => card === 'A');
  this.total = this.cards.reduce((total, card) => {
    if (card === 'A') {
      return total + 11;
    }
    if (card === 'K' || card === 'Q' || card === 'J') {
      return total + 10;
    }
    return total + parseInt(card);
  }, 0);
};
