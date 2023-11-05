import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
  background-color: ${theme.color.primaryBg};
  padding: 40px 0;
`
const Name = styled.span`
  ${font({family: "'Josefin Sans', sans-serif", Fmax: 22, Fmin: 16, weight: 700})}
  letter-spacing: 3px;
`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.10);

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.color.accent};

  &:hover {
    transform: translateY(-4px);
    background-color: ${theme.color.accent};
    color: ${theme.color.primaryBg};
  }
`
const Copyright = styled.small`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
`

export const S = {
    Footer,
    Name,
    SocialList,
    SocialLink,
    Copyright
}