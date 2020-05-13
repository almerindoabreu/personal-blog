import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import media from "styled-media-query"

export const NavBarWrapper = styled.nav`
  display: ${props => (props.mode === "large" ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  width: 75%;
  top: 0;
  position: fixed;
  background-color: #16202c;

  ${media.lessThan("830px")`
    display: ${props => (props.mode === "small" ? "flex" : "none")};
    z-index: 999;
    width: 100%;
  `}

  ${media.lessThan("530px")`
    display: none;
  `}
`

export const NavBarGroup = styled.div`
  color: #fff;
  margin: 0.8rem;
  margin-left: auto;
  margin-right: 1rem;

  ${media.lessThan("large")`
    margin: 0.8rem 3rem 0.8rem auto;
  `}

  ${media.lessThan("975px")`
    margin: 0.8rem 2.5rem 0.8rem 3.5rem;
  `}

  ${media.lessThan("910px")`
    margin: 0.8rem auto 0.8rem 0rem;
  `}

  ${media.lessThan("medium")`
    margin: 0.8rem 2rem 0.8rem auto;
  `}

  ${media.lessThan("830px")`
    z-index: 999;
    width: 100%;
  `}

`

export const MenuLinksList = styled.ul`
  list-style-type: none;
`

export const NavBarLinkItem = styled.li`
  float: left;
  .active {
    border-bottom: #42a5f5 solid 3px;
  }
`

export const NavBarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0.3rem;
  cursor: pointer;
  margin: 0.8rem;
  transition: 0.3s;
  &:hover {
    border-bottom: #42a5f5 solid 3px;
  }
  .active {
    border-bottom: #42a5f5 solid 3px;
  }
`
