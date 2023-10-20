import React from 'react';
import styled from "styled-components";

type WorkPropsType={
    src: string
    title: string
    text: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href="#">Demo</Link>
            <Link href="#">Code</Link>
        </StyledWork>
    );
};

const StyledWork=styled.div`
  max-width: 540px;
  width: 100%;
  background-color: #d8d8ec;
`
const Image=styled.img`
  height: 260px;
  object-fit: cover;
  width: 100%;
`
const Title=styled.h3`

`
const Text=styled.p`

`
const Link=styled.a`

`

