import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const WrapperMobileAction = styled.div`
display: none;

  ${media.lessThan("750px")`
  display: flex;
  position: fixed;
  bottom: 0;

  height: 40px;
  width: 100%;

  z-index: 500;

  border-top: solid 1px var(--border);
  background: var(--background);
  `}
`

export const MobileActionGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`

export const MobileActionLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
`

export const IconWrapper = styled.div`
  fill: #fff;
  width: 30px;
  height: 30px;
`
