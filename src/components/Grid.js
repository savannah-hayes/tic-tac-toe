import React from "react";
import { useDispatch } from "react-redux";

import { game } from "reducers/game"

import { SquareButton } from "styles"
import { Player } from "./Player";

export const Grid = ({ square, index }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(game.actions.captureSquare({ index }))
  }

  return (
    <SquareButton
      box={square === null ? 'square clickable' : 'square'}
      onClick={handleClick}>
      <Player square={square} />
    </SquareButton>
  )
}
