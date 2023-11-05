import React from 'react';
import {S} from "./Works_Styles"
import {SectionTitle} from "../../../components/SectionTitle";
import {Work} from "./work/Work";
import socialWork from "../../../assets/images/proj-1.png"
import timerWork from "../../../assets/images/proj-2.png"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TabMenu} from "./tabMenu/TabMenu";
import {Container} from "../../../components/Container";


const worksItem = ['All', 'Landing Page', 'React', 'SPA']
const worksData = [
    {
        src: socialWork,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    },
    {
        src: timerWork,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    }
]
export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItem}/>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'flex-start'}>
                    {worksData.map((w, index) => {
                        return (
                            <Work key={index}
                                  src={w.src}
                                  title={w.title}
                                  text={w.text}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

