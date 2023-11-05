import React from 'react';
import {S} from "../Works_Styles"
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    src: string
    title: string
    text: string
}
export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src}/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.WorkWrapper>
                <h3>{props.title}</h3>
                <S.Text>{props.text}</S.Text>
                <Link href="#">Demo</Link>
                <Link href="#">Code</Link>
            </S.WorkWrapper>
        </S.Work>
    );
};




