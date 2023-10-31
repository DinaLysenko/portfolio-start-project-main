import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 30%;
  margin-bottom: 70px;
`
const IconWrapper=styled.div`
  position: relative;

  &::before {
    content: '';
    width: 80px;
    height: 80px;
    transform: rotate(-45deg) translate(-50%, -50%);
    background-color: #FFFFFF1A;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
  }
`


const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`
const SkillText = styled.p`
  text-align: center;
  
  
`