import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {Link} from "../../../components/Link";

const Works = styled.section`
  ${FlexWrapper} {
    gap: 60px;
    @media ${theme.media.mobile} {
      gap: 30px;
    }
  }
`
const Work = styled.div`
  width: 330px;
  background-color: ${theme.color.secondary};
  flex-grow: 1;

$media ${theme.media.deskTop} {
  max-width: 540px;
}
`
const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(4px);
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;

      &::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;

      &::before {
        width: 100%;
        height: 100%;
      }
    }
  }
`

const Image = styled.img`
  height: 260px;
  object-fit: cover;
  width: 100%;
`

const WorkWrapper = styled.div`
  margin: 25px 20px;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`

const Text = styled.p`
  margin: 14px 0 14px;
`

export const S ={
  Works,
  Work,
  ImageWrapper,
  Image,
  WorkWrapper,
  Text
}