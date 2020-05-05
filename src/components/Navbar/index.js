import React from "react"

import * as S from "./styled"

const NavBar = ({ mode }) => (
  <S.NavBarWrapper mode={mode}>
    <S.NavBarGroup>
      <S.MenuLinksList>
        <S.NavBarLinkItem>
          <S.NavBarLink activeClassName="active" to="/">
            Home
          </S.NavBarLink>
        </S.NavBarLinkItem>
        <S.NavBarLinkItem>
          <S.NavBarLink activeClassName="active" to="/artigos">
            Artigos
          </S.NavBarLink>
        </S.NavBarLinkItem>
        <S.NavBarLinkItem>
          <S.NavBarLink activeClassName="active" to="/cheatsheet">
            Cheat Sheet
          </S.NavBarLink>
        </S.NavBarLinkItem>
        <S.NavBarLinkItem>
          <S.NavBarLink activeClassName="active" to="/projetos">
            Projetos
          </S.NavBarLink>
          <S.NavBarLink activeClassName="active" to="/search">
            Pesquisar
          </S.NavBarLink>
        </S.NavBarLinkItem>
      </S.MenuLinksList>
    </S.NavBarGroup>
  </S.NavBarWrapper>
)

export default NavBar
