import React from 'react';
import styled from 'styled-components';
import {Link} from '../../../../components/Link';
import {StatusType, TabItem} from '../Works';

type TabMenuType = {
    menuItems: TabItem[]
    changeFilter: (value: StatusType) => void
    currentTabMenu: StatusType
}

export const TabMenu: React.FC<TabMenuType> = (props: TabMenuType) => {

    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <Link active={props.currentTabMenu === item.status} as={'button'}
                              onClick={() => props.changeFilter(item.status)}>{item.title}</Link></li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 46px;
    }
`



