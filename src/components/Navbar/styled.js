import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const NavBarWrapper = styled.nav`
  display: ${props => (props.mode === "large" ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
  padding-left: 320px;
  margin: auto;
  top: 0;
  position: fixed;
  background-color: var(--background);

  

  ${media.lessThan("975px")`
    padding-right: 40px;
  `}

  ${media.lessThan("965px")`
    padding-right: 30px;
  `}

  ${media.lessThan("955px")`
    padding-right: 10px;
  `}

  ${media.lessThan("920px")`
    padding-left: 0px;
    z-index: 500;
  `}

  ${media.lessThan("750px")`
    display: none;
    `}
`

export const NavBarGroup = styled.div`
  color: var(--texts);
  margin: 0.5rem 0.8rem;
  margin-left: auto;
  margin-right: 1rem;

  ${media.lessThan("large")`
    margin: 0.8rem 2.5rem 0.8rem auto;
  `}

  ${media.lessThan("975px")`
    margin: 0.8rem 0rem 0.8rem auto;
  `}

  ${media.lessThan("910px")`
    margin: 0.8rem 1rem 0.8rem 0rem;
  `}

  ${media.lessThan("medium")`
    margin: 0.8rem 2rem 0.8rem auto;
  `}

  ${media.lessThan("830px")`
    z-index: 10;
    width: 100%;
  `}

`

export const MenuLinksList = styled.ul`
  list-style-type: none;
`

export const NavBarLinkItem = styled.li`
  float: left;
  margin-top: 7px;

  .active {
    border-bottom: #42a5f5 solid 3px;
  }
`

export const NavBarLink = styled(AniLink)`
  text-decoration: none;
  color: var(--texts);
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
