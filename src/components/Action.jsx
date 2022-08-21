import React from 'react';

import './Action.scss';

export const Action = ({option, onAction, disabled}) => (
  <button
    className='action'
    type='button'
    onClick={() => onAction(option)}
    disabled={disabled}
  >
    {option}
  </button>
);
