import React from 'react';
import {S} from "../HeaderMenu_Styles"
import {Menu} from "../menu/Menu";

export const DesktopMenu:React.FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems}/>
        </S.DesktopMenu>
    );
};




