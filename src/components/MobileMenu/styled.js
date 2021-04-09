import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const WrapperMobileMenu = styled.div`
  display: none;

  height: 100vh;
    width: 20rem;

  ${media.lessThan("750px")`
    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;
    height: calc(100% - 50px);
    position: inherit;
    width: 100%;

    background: var(--background);
    transition: 0.5s;
    
    transform: ${props =>
      props.isOpenedMobileMenu ? 'translateY(0)' : 'translateY(-100vh)'};
  `}
  

`
export const WrapperMobileMenuNav = styled.div`
  display: flex;
  flex-direction: column;
  margin: 90px;


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
