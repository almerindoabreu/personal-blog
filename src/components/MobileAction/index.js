import React from "react"

import Icons from "./icons"
import links from "./content"

import NightMode from "../NightMode";

import * as S from "./styled"

import getThemeColor from "../../utils/getThemeColor"

const MobileAction = ({nightMode, setNightMode}) => (
  <S.WrapperMobileAction>
    <S.MobileActionGroup>
      {links.map((link, i) => {
        const Icon = Icons[link.label]
        return (
            <S.MobileActionLink
              to={link.url}
              title={link.label}
              cover
              direction="down"
              bg={getThemeColor()}
              duration={0.6}
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
              <S.MobileActionLabel>
                {link.legend}
                </S.MobileActionLabel>
            </S.MobileActionLink>
        )
      })}
      <S.IconNightModeWrapper>
        <NightMode isDarkMode={nightMode} setNightMode={setNightMode}/>
        <S.MobileActionLabel>
        {"Tema"}
        </S.MobileActionLabel>
      </S.IconNightModeWrapper>
    </S.MobileActionGroup>
  </S.WrapperMobileAction>
)

export default MobileAction
