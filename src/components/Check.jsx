import React from 'react';

export const Check = ({onCheck}) => (
  <button
    type='button'
    onClick={() => onCheck()}
  >
    Check
  </button>
);