import React from 'react';
import photo from '../../../assets/images/web-development.jpg'
import {S} from "./Main_Styles"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";


export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Dina Lysenko</span></S.Name>
                        <S.MainTitle>A Web Developer. </S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

