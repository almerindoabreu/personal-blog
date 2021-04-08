import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

import { Menu } from "@styled-icons/entypo/Menu"

export const NavbarMobileWrapper = styled.div`
  display: none;
  padding: 0.5rem 1rem;
  background-color: var(--background);
  flex-direction: row;
  ${media.lessThan("750px")`
    display: ${props => (props.mode === "small" ? "flex" : "none")};
  `}
`

export const NavbarMobile = styled.nav``

export const NavbarMobileIconWrapper = styled.button`
  background-color: var(--background);
  border: none;
  cursor: pointer;
`

export const NavbarMobileIcon = styled(Menu)`
  width: 30px;
  height: 30px;
  color: var(--texts);;
`

export const NavbarMobileMenu = styled.div`
  display: ${props => (props.menu === true ? "flex" : "none")};
  flex-direction: column;
  padding: 0rem 1rem 1rem 1rem;
  transition: 0.3s;
  width: 100%;
`

export const NavbarMobileLinkList = styled.ul`
  list-style-type: none;
  margin-top: 1rem;
`

export const NavbarMobileItem = styled.li`
  color: var(--texts);

  .active {
    border-bottom: #42a5f5 solid 3px;
  }
`

export const NavbarMobileLink = styled(AniLink)`
  text-decoration: none;
  color: var(--texts);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border-bottom: #42a5f5 solid 3px;
  }
  .active {
    border-bottom: #42a5f5 solid 3px;
  }
`
