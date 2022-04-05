import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { game } from "reducers/game";
import { TrackPlayer } from "./TrackPlayer";

export const TrackGame = () => {
  const dispatch = useDispatch();
  const winner = useSelector(store => store.game.winner);
  const nextPlayer = useSelector(store => store.game.player);

  const handleButtonPress = () => {
    dispatch(game.actions.restart());
  };

  if (winner) {
    return (
      <TrackPlayer 
        tracker={winner} 
        onclick={handleButtonPress} 
        buttonText="Start new game"
        pText="winner: "
      />
    )
  };

  return (
    <TrackPlayer 
      tracker={nextPlayer} 
      onclick={handleButtonPress} 
      buttonText="Restart"
      pText="Next player: "
    />
  )
};
