import React from 'react';

export const Action = ({option, onAction}) => (
  <button
    type='button'
    onClick={() => onAction(option)}
  >
    {option}
  </button>
);
