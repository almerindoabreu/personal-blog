import styled from "styled-components"
import media from "styled-media-query"

export const WrapperSocialLinks = styled.nav`
  margin: 2rem auto;
  width: 100%;

  ${media.lessThan("medium")`
    margin: 1rem auto;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.5s;
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
