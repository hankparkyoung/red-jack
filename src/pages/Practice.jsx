import React, { useState, useEffect } from 'react';
import { Option } from '../constants';
import {
  toNumber,
  correctAction,
  isDisabled,
} from '../utils';
import { Hand } from '../Hand';
import { Action } from '../components/Action';
import { Check } from '../components/Check';

const Practice = () => {

  const options = Object.values(Option);
  const [dealer, setDealer] = useState(new Hand());
  const [player, setPlayer] = useState(new Hand());
  const [guess, setGuess] = useState();
  const [answer, setAnswer] = useState();
  const [revealed, setRevealed] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    if (player.total() === 21) { // ignore blackjacks in practice
      setDealer(new Hand());
      setPlayer(new Hand());
    };
    setAnswer(correctAction(toNumber(dealer.cards[0]), player));
  }, [dealer, player])

  const onCheck = () => {
    setRevealed(true);
    guess === answer ? setCorrect(correct + 1) : setIncorrect(incorrect + 1);
  }

  return (
    <div>
      <h3>Practice</h3>
      <div>
        <p>{`Correct: ${correct}`}</p>
        <p>{`Incorrect: ${incorrect}`}</p>
      </div>
      <div>
        <p>{`Dealer: ${dealer.cards[0]}`}</p>
        <p>{`Player: ${player.cards[0]}, ${player.cards[1]}`}</p>
      </div>
      <div>
        {options.map(option => (
          <Action
            option={option}
            onAction={setGuess}
            disabled={isDisabled(option, player)}
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
            setDealer(new Hand());
            setPlayer(new Hand());
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

export default Practice;
