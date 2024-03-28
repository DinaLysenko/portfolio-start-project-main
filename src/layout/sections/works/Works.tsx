import React, {useState} from 'react';
import {S} from './Works_Styles'
import {SectionTitle} from '../../../components/SectionTitle';
import {Work} from './work/Work';
import socialWork from '../../../assets/images/proj-1.png'
import timerWork from '../../../assets/images/proj-2.png'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {TabMenu} from './tabMenu/TabMenu';
import {Container} from '../../../components/Container';

export type StatusType = 'all' | 'landing' | 'react' | 'spa'
export type TabItem = {
    title: string
    status: StatusType
}

const tabItems: TabItem[] = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'Landing Page',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'SPA',
        status: 'spa'
    }
]
const worksData = [
    {
        src: socialWork,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa'
    },
    {
        src: timerWork,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'react'
    }
]
export const Works: React.FC = () => {
    const [currentTabMenu, setCurrentTabMenu] = useState<StatusType>('all')
    let filteredWorks = worksData
    if (currentTabMenu === 'landing') {
        filteredWorks = worksData.filter(w => w.type === 'landing')
    }
    if (currentTabMenu === 'react') {
        filteredWorks = worksData.filter(w => w.type === 'react')
    }
    if (currentTabMenu === 'spa') {
        filteredWorks = worksData.filter(w => w.type === 'spa')
    }
    const changeFilter = (value: StatusType) => {
        setCurrentTabMenu(value)
    }
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={tabItems} changeFilter={changeFilter} currentTabMenu={currentTabMenu}/>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'flex-start'}>
                    {filteredWorks.map((w, index) => {
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

