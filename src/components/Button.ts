import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button =styled.button`
  width: 170px;
  height: 32px;

  position: relative;
  z-index: 0;
  
  &:hover {
    &::before {
      width: 100%;
      height: 100%;
    }
  }
  
  &::before {
    content: '';
    display: inline-block;
    height: 10px;
    background-color: ${theme.color.accent};
    width: 50%;

    position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom: 0;
    z-index: -1;
  }
`