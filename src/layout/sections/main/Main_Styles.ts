import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
  min-height: 100vh;
  display: flex;

  @media ${theme.media.tablet} {
    justify-content: center;
    align-items: center;
  }
`
const PhotoWrapper=styled.div`
  position: relative;
  z-index: 0;
     
  &::before {
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.color.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    
    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
    }
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;

  @media ${theme.media.mobile} {
    display: inline-block;
    margin-top: 22px;
  }
`
const Name = styled.h2`
  ${font({family: '"Josefin Sans", sans-serif', Fmax: 50, Fmin: 36, weight: 700})}
  letter-spacing: 0.05em;
  margin: 10px 0;
  
  @media ${theme.media.tablet} {
    margin: 15px 0 22px ;
  }

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: '';
      background-color: ${theme.color.accent};
      display: inline-block;
      height: 20px;
      width: 100%;

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`
const MainTitle = styled.h1`
  ${font({Fmax: 27, Fmin: 20, weight: 400})}
  margin-bottom: 65px;
`

export const S={
    Main,
    PhotoWrapper,
    Photo,
    SmallText,
    Name,
    MainTitle
}