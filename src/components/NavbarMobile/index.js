import React, { useState } from "react"

import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

const NavBarMobile = ({ links, mode }) => {
  const [menuOn, setMenuOn] = useState(false)

  const handleMenu = () => {
    setMenuOn(!menuOn)
  }

  return (
    <S.NavbarMobileWrapper mode={mode}>
      <S.NavbarMobile>
        <S.NavbarMobileIconWrapper onClick={() => handleMenu()}>
          <S.NavbarMobileIcon />
        </S.NavbarMobileIconWrapper>
        <S.NavbarMobileMenu menu={menuOn}>
          {links.map((link, i) => (
            <S.NavbarMobileLinkList>
              <S.NavbarMobileItem>
                <S.NavbarMobileLink
                  activeClassName="active"
                  to={link.url}
                  cover
                  direction="down"
                  bg={getThemeColor()}
                  duration={0.6}
                  onClick={() => handleMenu()}
                >
                  {link.label}
                </S.NavbarMobileLink>
              </S.NavbarMobileItem>
            </S.NavbarMobileLinkList>
          ))}
        </S.NavbarMobileMenu>
      </S.NavbarMobile>
    </S.NavbarMobileWrapper>
  )
}

export default NavBarMobile
