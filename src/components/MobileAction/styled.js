import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const WrapperMobileAction = styled.div`
display: none;

  ${media.lessThan("750px")`
  display: flex;
  position: fixed;
  bottom: 0;

  height: 55px;
  width: 100%;

  z-index: 500;


  border-top: solid 1px var(--borders);
  background: var(--background);
  `}
`

export const MobileActionGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  padding-bottom: 5px;
`

export const MobileActionLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  align-items: center;
  transition: color 0.5s;
`

export const MobileActionLabel = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--texts);
  font-size: 12px;
`

export const IconNightModeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  fill: #fff;
  width: 30px;
  height: 30px;

  & div{
    margin-top: 0px;
    margin-right: 0px;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  fill: #fff;
  width: 30px;
  height: 30px;
  margin: 0px auto 0px auto;
`
