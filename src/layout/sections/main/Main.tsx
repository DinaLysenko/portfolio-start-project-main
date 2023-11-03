import React from 'react';
import photo from '../../../assets/images/web-development.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Dina Lysenko</span></Name>
                        <MainTitle>A Web Developer. </MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
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
  margin-right: 20px;
  margin-top: 65px;
  
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
  
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }

`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
 
`
const Name = styled.h2`
  ${font({family: 'Josefin Sans, sans-serif', Fmax: 50, Fmin: 36, weight: 700})}
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
`