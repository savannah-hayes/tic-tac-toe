import React from "react";
import { useDispatch } from "react-redux";

import { game } from "reducers/game";
import { Player } from "components/Player";

import { SquareButton } from "styles";

export const Grid = ({ square, index }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(game.actions.captureSquare({ index }))
  };

  return (
    <SquareButton type="button" onClick={handleClick}>
      <Player square={square} />
    </SquareButton>
  )
};
