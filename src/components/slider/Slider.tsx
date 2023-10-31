import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.</Text>
                    <Name>@ivan ivanow</Name>
                </Slide>
            </FlexWrapper>
            <Icon iconId={'pagination'}/>
            {/*<Pagination>*/}
            {/*    <span> </span>*/}
            {/*    <span> </span>*/}
            {/*    <span> </span>*/}
            {/*</Pagination>*/}
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
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