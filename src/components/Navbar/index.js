import React, { useState, useEffect } from "react"

import * as S from "./styled"
import links from "./links"
import NavbarMobile from "../NavbarMobile"
import NightMode from "../NightMode"

import getThemeColor from "../../utils/getThemeColor"

const NavBar = ({ mode }) => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)

    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <>
    <NavbarMobile links={links} mode={mode} />
    <S.NavBarWrapper mode={mode}>
      <S.NavBarGroup>
        <S.MenuLinksList >
          {links.map((link, i) => (
            <S.NavBarLinkItem>
              <S.NavBarLink activeClassName="active" to={link.url}>
                {link.label}
              </S.NavBarLink>
              
            </S.NavBarLinkItem>
          ))}
          <NightMode isDarkMode={isDarkMode}/>
        </S.MenuLinksList>
      </S.NavBarGroup>
    </S.NavBarWrapper>
  </>
  );
}
 

export default NavBar
