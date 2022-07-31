import React, { useState, useEffect } from 'react';
import { Action } from './constants';
import { drawCard, correctAction } from './utils';
import { Guess } from './Guess';

const App = () => {

  const actions = Object.values(Action);
  const [dealer, setDealer] = useState(drawCard());
  const [player, setPlayer] = useState([drawCard(), drawCard()]);
  const [guess, setGuess] = useState();
  const [answer, setAnswer] = useState();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setAnswer(correctAction(dealer, player));
  }, [dealer, player])

  return (
    <div>
      <h1>Red Jack</h1>
      <div>
        <p>{`Dealer: ${dealer}`}</p>
        <p>{`Player: ${player[0]}, ${player[1]}`}</p>
      </div>
      <div>
        {actions.map(action => {
          return Guess(action, setGuess);
        })}
      </div>
      {guess &&
        <p>{`Your guess: ${guess}`}</p>
      }
      {revealed &&
        <p>{`Correct Action: ${answer}`}</p>
      }
      <div>
        <button
          type='button'
          onClick={() => {
            setRevealed(true);
          }}
        >
          Check
        </button>
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
