import React, { useState } from 'react';
import { Option } from '../constants';
import { Hand } from '../Hand';

const Basic = () => {
  const options = Object.values(Option);
  const [dealer, setDealer] = useState(new Hand());
  const [player, setPlayer] = useState(new Hand());
  console.info(player.cards, player.isBlackjack(), player.canSplit(), player.isSoft(), player.total());
  return (
    <div>
      <h3>Basic</h3>
      <div>
        <p>{`Dealer: ${dealer.cards[0]}`}</p>
      </div>
      <div>
        <p>{`Player: ${player.cards.join(', ')}`}</p>
        <p>{`Player Total: ${player.total()}`}</p>
      </div>
    </div>
  )
}

export default Basic;
