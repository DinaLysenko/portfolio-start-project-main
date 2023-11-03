import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Work} from "./work/Work";
import socialWork from "../../../assets/images/proj-1.png"
import timerWork from "../../../assets/images/proj-2.png"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TabMenu} from "./tabMenu/TabMenu";
import {Container} from "../../../components/Container";

const worksItem = ['All', 'Landing Page', 'React', 'SPA']
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItem}/>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'flex-start'}>
                    <Work src={socialWork}
                          title={'Social Network'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Work src={timerWork}
                          title={'Timer'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

  ${FlexWrapper} {
    gap: 30px;
  }
`