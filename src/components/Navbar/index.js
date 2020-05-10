import React from "react"

import * as S from "./styled"
import links from "./links"
import NavbarMobile from "../NavbarMobile"

const NavBar = ({ mode }) => (
  <>
    <NavbarMobile links={links} mode={mode} />
    <S.NavBarWrapper mode={mode}>
      <S.NavBarGroup>
        <S.MenuLinksList>
          {links.map((link, i) => (
            <S.NavBarLinkItem>
              <S.NavBarLink activeClassName="active" to={link.url}>
                {link.label}
              </S.NavBarLink>
            </S.NavBarLinkItem>
          ))}
        </S.MenuLinksList>
      </S.NavBarGroup>
    </S.NavBarWrapper>
  </>
)

export default NavBar
