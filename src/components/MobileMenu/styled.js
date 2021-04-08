import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const WrapperMobileMenu = styled.div`
  display: none;

  ${media.lessThan("750px")`
    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;

    height: 100vh;
    width: 100vw;

    background: var(--background);
    transition: 0.5s;
    
    transform: ${props =>
      props.isOpenedMobileMenu ? 'translateX(0)' : 'translateX(-100vw)'};
  `}
  

`
export const WrapperMobileMenuNav = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20%;


  width: 100%;
`

export const MobileMenuNavItem = styled.div`
  margin: 0.8rem;
`

export const WrapperMobileMenuSocialLinks = styled.div`

  width: 100%;
`

export const MobileMenuNavLink = styled(AniLink)`
  text-decoration: none;
  color: var(--texts);
  padding: 0.3rem;
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s;
  &:hover {
    border-bottom: #42a5f5 solid 3px;
  }
  .active {
    border-bottom: #42a5f5 solid 3px;
  }
  
`
