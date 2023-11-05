import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";



export const TabMenu:React.FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <Link href="#">{item}</Link></li>
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



