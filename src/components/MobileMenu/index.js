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
            cover
            direction="down"
            bg={getThemeColor()}
            duration={0.6}>
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
