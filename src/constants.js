export const Option = {
  Split: 'Split',
  Double: 'Double',
  Hit: 'Hit',
  Stand: 'Stand',
};
export const Cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
export const drawCard = () => {
  return Cards[Math.floor(Math.random() * Cards.length)];
};
