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

import './Practice.scss';

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
    <div className='app'>

      <div className='header'>
        <h3 className='header__title'>Red Jack</h3>
        <p className='header__description'>A game of blackjack where only the correct action matters.</p>
      </div>

      <div className='scoreboard'>
        <div className='scoreboard__score'>
          <p className='scoreboard__text'>Correct</p>
          <p className='scoreboard__number'>{`${correct}`}</p>
        </div>
        <div className='scoreboard__score'>
          <p className='scoreboard__text'>Incorrect</p>
          <p className='scoreboard__number'>{`${incorrect}`}</p>
        </div>
      </div>

      <div className='cards'>
        <div className='cards__hand'>
          <p className='cards__text'>Dealer</p>
          <p className='cards__img'>{`${dealer.cards[0]}`}</p>
        </div>
        <div className='cards__hand'>
          <p className='cards__text'>Player</p>
          <p className='cards__img'>{`${player.cards[0]}, ${player.cards[1]}`}</p>
        </div>
      </div>

      <div className='actions'>
        {options.map(option => (
          <Action
            key={option}
            option={option}
            onAction={setGuess}
            disabled={isDisabled(option, player)}
          />
        ))}
      </div>

      <div className='answers'>
        <div className='answers__info'>
          <p className='answers__text'>Your Guess</p>
          {guess &&
            <p className='answers__reveal'>{`${guess}`}</p>
          }
        </div>
        <div className='answers__info'>
          <p className='answers__text'>Correct Answer</p>
          {revealed &&
            <p className='answers__reveal'>{`${answer}`}</p>
          }
        </div>
      </div>

      <div className='actions'>
        <Check onCheck={onCheck} />
        <button
          className='action'
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
