import styled from "styled-components";

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2vw;
  padding: 5vw;
`

export const GameContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const SquareButton = styled.button`
  width: 150px;
  height: 150px;
  border: 1px solid #f9a217;
  background: #ccc;
  display: block;
  appearance: none;
  cursor: pointer;
`

export const Icons = styled.img`
  width: 80px;
  height: 80px;
`

export const TrackGameWrapper = styled.div`
  padding-top: 5vw;
  font-size: 2vw;
`

export const PlayerText = styled.p`
  display: flex;
  align-items: center;

  & > img {
    width: 45px;
    height: 45px;
  }
`


