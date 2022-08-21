import React from 'react';

import './Action.scss';

export const Check = ({onCheck}) => (
  <button
    className='action'
    type='button'
    onClick={() => onCheck()}
  >
    Check
  </button>
);