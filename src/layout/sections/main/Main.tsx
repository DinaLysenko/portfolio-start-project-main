import React from 'react';
import photo from '../../../assets/images/web-development.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Dina Lysenko</h2>
                    <h1>A Web Developer. </h1>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: rgba(201, 74, 231, 0.42);
`
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`