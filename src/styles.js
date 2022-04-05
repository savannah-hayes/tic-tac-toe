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
  width: 150px;
  height: 150px;
  background: #ccc;
  display: block;
  appearance: none;
  cursor: pointer;
  position: relative;
`

export const Icons = styled.img`
  width: 100px;
  height: 100px;
`


