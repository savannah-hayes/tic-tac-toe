import styled from "styled-components";

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 2vw;
  padding: 5vw;
`

export const GameContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const SquareButton = styled.button`
  padding-bottom: 100%;
  background: #ccc;
  display: block;
  appearance: none;
  cursor: pointer;
  position: relative;
`

