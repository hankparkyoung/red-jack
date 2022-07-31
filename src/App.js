import React, { useState, useEffect } from 'react';
import { Action } from './constants';
import { drawCard, correctAction } from './utils';
import { Guess } from './Guess';
import { Check } from './Check';

const App = () => {

  const actions = Object.values(Action);
  const [dealer, setDealer] = useState(drawCard());
  const [player, setPlayer] = useState([drawCard(), drawCard()]);
  const [guess, setGuess] = useState();
  const [answer, setAnswer] = useState();
  const [revealed, setRevealed] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    setAnswer(correctAction(dealer, player));
  }, [dealer, player])

  const onCheck = () => {
    setRevealed(true);
    guess === answer ? setCorrect(correct + 1) : setIncorrect(incorrect + 1);
  }

  return (
    <div>
      <h1>Red Jack</h1>
      <div>
        <p>{`Correct: ${correct}`}</p>
        <p>{`Incorrect: ${incorrect}`}</p>
      </div>
      <div>
        <p>{`Dealer: ${dealer}`}</p>
        <p>{`Player: ${player[0]}, ${player[1]}`}</p>
      </div>
      <div>
        {actions.map(action => (
          <Guess
            action={action}
            onGuess={setGuess}
          />
        ))}
      </div>
      {guess &&
        <p>{`Your guess: ${guess}`}</p>
      }
      {revealed &&
        <p>{`Correct Action: ${answer}`}</p>
      }
      <div>
        <Check onCheck={onCheck} />
        <button
          type='button'
          onClick={() => {
            setDealer(drawCard());
            setPlayer([drawCard(), drawCard()]);
            setGuess(null);
            setRevealed(false);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
