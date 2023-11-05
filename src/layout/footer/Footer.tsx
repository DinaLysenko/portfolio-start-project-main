import React from 'react';
import {S} from "./Footer_Styles"
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

const socialItemData = [
    {
        iconId: 'telegram',

    },
    {
        iconId: 'instagram',

    },
    {
        iconId: 'linkedin',

    },
    {
        iconId: 'vkLogo',

    }
]
export const Footer = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Dina</S.Name>
                <S.SocialList>
                    {socialItemData.map((s, index) => {
                        return (
                            <li key={index}>
                                <S.SocialLink>
                                    <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={s.iconId}/>
                                </S.SocialLink>
                            </li>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Dina Lysenko, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};



