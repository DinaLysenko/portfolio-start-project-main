import React from 'react';
import {S} from "../HeaderMenu_Styles"
import {Menu} from "../menu/Menu";

export const MobileMenu:React.FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {
    return (
        <nav>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
               <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>
        </nav>
    );
};





