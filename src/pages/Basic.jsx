import React, { useState, useEffect } from 'react';
import { Option } from '../constants';
import { drawCard } from '../utils';

const Basic = () => {

  const actions = Object.values(Option);
  const [bank, setBank] = useState(1000);
  const [dealer, setDealer] = useState(drawCard());
  const [player, setPlayer] = useState([drawCard(), drawCard()]);

  return (
    <div>
      <h3>Basic</h3>
      <div>
        <p>{`Bank: ${bank}`}</p>
      </div>
      <div>
        <p>{`Dealer: ${dealer}`}</p>
        <p>{`Player: ${player}`}</p>
      </div>
    </div>
  );
};

export default Basic;
