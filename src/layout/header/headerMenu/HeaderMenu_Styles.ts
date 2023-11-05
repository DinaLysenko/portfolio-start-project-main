import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

// Menu

const Link = styled.a`
  text-align: center;
  font-family: Josefin Sans, sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: transparent;
`
const Mask = styled.span`
  color: ${theme.color.accent};
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }

`

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    height: 3px;
    display: inline-block;
    background-color: ${theme.color.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.color.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`

// DesktopMenu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`

// MobileMenu

const MobileMenuPopup=styled.div<{isOpen:boolean}>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(31, 31, 32, 0.90);
  z-index: 99999;
  display: none;
  
  ${props=>props.isOpen && css<{isOpen:boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

const BurgerButton = styled.button<{isOpen:boolean}>`
  position: fixed;
  top: -110px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.color.font};

    position: absolute;
    left: 40px;
    bottom: 50px;
    
    
    ${props=>props.isOpen && css<{isOpen:boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}

    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.color.font};

      position: absolute;
      transform: translateY(-10px);
      
      ${props=>props.isOpen && css<{isOpen:boolean}>`
      
        transform: translateY(0px) rotate(-45deg);
      
    `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.color.font};

      position: absolute;
      transform: translateX(10px) translateY(10px);

      ${props=>props.isOpen && css<{isOpen:boolean}>`
     
        transform: translateY(0px) rotate(45deg);
        width: 36px;
      
    `}
    }
  }
`

export const S = {
    Link,
    Mask,
    ListItem,
    DesktopMenu,
    MobileMenuPopup,
    BurgerButton
}