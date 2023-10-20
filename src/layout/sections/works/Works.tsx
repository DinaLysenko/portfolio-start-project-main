import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {Work} from "./work/Work";
import socialWork from "../../../assets/images/proj-1.png"
import timerWork from "../../../assets/images/proj-2.png"
import {FlexWrapper} from "../../../components/FlexWrapper";

const worksItem = ['All', 'Landing Page', 'React', 'SPA']
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Works</SectionTitle>
            <Menu menuItems={worksItem}/>
            <FlexWrapper wrap={'wrap'} justify={'space-around'}>
                <Work src={socialWork}
                      title={'Social Network'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                <Work src={timerWork}
                      title={'Timer'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: rgba(115, 115, 206, 0.51);
`