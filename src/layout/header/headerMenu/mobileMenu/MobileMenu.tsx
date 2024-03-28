import React, {useState} from 'react';
import {S} from "../HeaderMenu_Styles"
import {Menu} from "../menu/Menu";

export const MobileMenu:React.FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {
    const[isMenuOpen, setIsMenuOpen]=useState(false)
    const onBurgerBtnClick=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <nav>
            <S.BurgerButton isOpen={isMenuOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={isMenuOpen} onClick={()=>{setIsMenuOpen(false)}}>
               <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>
        </nav>
    );
};





