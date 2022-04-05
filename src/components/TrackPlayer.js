import React from 'react'

import { Player } from "components/Player";

import { TrackGameWrapper, PlayerText } from "styles";

export const TrackPlayer = ({ tracker, onclick, buttonText, pText }) => {
  return (
    <TrackGameWrapper>
      <PlayerText>
        {pText} <Player square={tracker} />
      </PlayerText>
      <button type="button" onClick={onclick}>{buttonText}</button>
    </TrackGameWrapper>
  )
}
