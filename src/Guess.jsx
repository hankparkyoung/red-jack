export const Guess = ({action, onGuess}) => (
  <button
    type='button'
    onClick={() => onGuess(action)}
  >
    {action}
  </button>
);
