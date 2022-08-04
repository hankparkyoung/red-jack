// import React, { useEffect, useState } from 'react';
// import { Option } from '../constants';
// import { drawCard, playerTotal } from '../utils';

// const Basic = () => {

  // const isBlackjack = player => {
  //   return player.length === 2 && playerTotal(player) === 21;
  // };

  // const options = Object.values(Option);
  // const [bank, setBank] = useState(1000);
  // const [dealer, setDealer] = useState(drawCard());
  // const [playerCards, setPlayerCards] = useState([drawCard(), drawCard()]);
  // const [player, setPlayer] = useState(0);

  // useEffect(() => {
  //   return setPlayer(playerTotal(playerCards));
  // }, [playerCards]);

  // return (
  //   <div>
  //     <h3>Basic</h3>
  //     <div>
  //       <p>{`Bank: ${bank}`}</p>
  //     </div>
  //     <div>
  //       <p>{`Dealer: ${dealer}`}</p>
  //       <p>{`Player: ${playerCards}`}</p>
  //       <p>{`Player Total: ${player}`}</p>
  //     </div>
  //   </div>
  // );
// };

import React from 'react';
import { Hand } from '../Hand';

const Basic = () => {
  const exampleHand = new Hand();
  console.log(exampleHand);
  return (
    <div>
      <h3>Basic</h3>
      {/* <p>{exampleHand}</p> */}
    </div>
  )
}

export default Basic;
