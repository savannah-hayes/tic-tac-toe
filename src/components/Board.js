import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "./Grid"

import { GameBoard } from "styles";

export const Board = () => {
  const squares = useSelector((store) => (store.game.squares))

  console.log(squares)

  return (
    <GameBoard>
      {squares.map((square, index) => (
        <Grid key={index} square={square} index={index} />
      ))}
    </GameBoard>
  )
}