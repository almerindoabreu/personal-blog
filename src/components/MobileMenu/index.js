import React from "react"

import SocialLinks from "../SocialLinks"
import * as S from "./styled"

import links from "../Navbar/links"
import getThemeColor from "../../utils/getThemeColor"

const MobileMenu = ({isOpenedMobileMenu, setIsOpenedMobileMenu}) => {
  return (
  <S.WrapperMobileMenu isOpenedMobileMenu={isOpenedMobileMenu}>
    <S.WrapperMobileMenuNav>

    {links.map(link => {
      return (
        <S.MobileMenuNavItem>
          <S.MobileMenuNavLink
            activeClassName="active"
            to={link.url}
            onClick={() => setIsOpenedMobileMenu(!isOpenedMobileMenu)}
            cover
            direction="up"
            bg={getThemeColor()}
            duration={1.4}>
              {link.label}
          </S.MobileMenuNavLink>
        </S.MobileMenuNavItem>
        );
      })
    }
    </S.WrapperMobileMenuNav>
    <S.WrapperMobileMenuSocialLinks>
      <SocialLinks />
    </S.WrapperMobileMenuSocialLinks>
  </S.WrapperMobileMenu>

  );
}

export default MobileMenu
