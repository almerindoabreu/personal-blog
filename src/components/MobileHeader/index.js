import React from "react"

import NavBar from "../Navbar"
import Avatar from "../Avatar"
import * as S from "./styled"


import getThemeColor from "../../utils/getThemeColor"

const MobileHeader = ({ isDarkMode, isOpenedMobileMenu, setIsOpenedMobileMenu}) => (
  <S.WrapperMobileHeader mode="small">
    <S.MobileHeaderGroup>
    <S.WrapperMobileHeaderMenu>
        <S.MobileMenuIcon onClick={() => setIsOpenedMobileMenu(!isOpenedMobileMenu)}/>
      </S.WrapperMobileHeaderMenu>
      <S.WrapperHeaderText>
        <S.MobileHeaderText>
          Almerindo Abreu
        </S.MobileHeaderText>
        <S.MobileHeaderSubText>
          Desenvolvedor full stack
        </S.MobileHeaderSubText>
      </S.WrapperHeaderText>
      <S.WrapperMobileHeaderAvatar mode="small">
      <Avatar isDarkMode={isDarkMode}/>
      </S.WrapperMobileHeaderAvatar>
    </S.MobileHeaderGroup>
  </S.WrapperMobileHeader>
)

export default MobileHeader
