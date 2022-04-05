import React from "react";

import { SquareButton } from "styles"

export const Grid = ({ square, index }) => {

  return (
    <SquareButton
      box={square === null ? 'square clickable' : 'square'}
    >
    </SquareButton>
  )
}
