import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';

type SlideProps = {
    text: string
    userName: string
}
export const Slide = ({text, userName}: SlideProps) => {
    return (
        <SlideStyle>
            <Text>{text}</Text>
            <Name>@{userName}</Name>
        </SlideStyle>
    )
}
const items = [
    <Slide userName='petr petrov' text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit."/>,
    <Slide userName='ivan ivanovv' text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit."/>,
    <Slide userName='alex sidorov' text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit."/>
];

export const Slider = () => (
    <StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </StyledSlider>
);

const StyledSlider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SlideStyle = styled.div`
    text-align: center;
`
const Text = styled.p`

`

const Name = styled.span`
    display: inline-block;
    margin: 22px 0 42px;
    font-family: Josefin San, sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
`


// const Pagination = styled.div`
//span {
//  display: inline-block;
//  height: 10px;
//  width: 10px;
//  background-color: #701c9a;
//  margin: 5px;
//}
// `