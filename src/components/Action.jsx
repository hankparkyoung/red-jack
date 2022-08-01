import React from 'react';

export const Action = ({option, onAction, disabled}) => (
  <button
    type='button'
    onClick={() => onAction(option)}
    disabled={disabled}
  >
    {option}
  </button>
);
