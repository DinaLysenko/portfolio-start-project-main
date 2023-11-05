import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 44px 20px 52px;
  @media ${theme.media.mobile} {
    padding: 24px 0 78px;
  }
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

export const S = {
    Skill,
    IconWrapper,
    SkillTitle,
    SkillText
}