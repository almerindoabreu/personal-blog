import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import media from "styled-media-query"

import { Menu } from "@styled-icons/entypo/Menu"

export const NavbarMobileWrapper = styled.div`
  display: none;
  padding: 0.5rem 1rem;
  position: fixed;
  width: 100%;
  background-color: #16202c;
  flex-direction: row;
  ${media.lessThan("530px")`
    display: ${props => (props.mode == "small" ? "flex" : "none")};
    z-index: 9999;
  `}
`

export const NavbarMobile = styled.nav``

export const NavbarMobileIconWrapper = styled.button`
  background-color: #16202c;
  border: none;
  cursor: pointer;
`

export const NavbarMobileIcon = styled(Menu)`
  width: 30px;
  height: 30px;
  color: #fff;
`

export const NavbarMobileMenu = styled.div`
  display: ${props => (props.menu == true ? "flex" : "none")};
  flex-direction: column;
  padding: 0rem 1rem 1rem 1rem;
  transition: 0.3s;
`

export const NavbarMobileLinkList = styled.ul`
  list-style-type: none;
  margin-top: 1rem;
`

export const NavbarMobileItem = styled.li`
  color: #fff;

  .active {
    border-bottom: #42a5f5 solid 3px;
  }
`

export const NavbarMobileLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border-bottom: #42a5f5 solid 3px;
  }
  .active {
    border-bottom: #42a5f5 solid 3px;
  }
`
