import styled from "styled-components"
import media from "styled-media-query"

export const ProfileWrapper = styled.section`
  color: var(--texts);;

  display: flex;
  flex-direction: column;
`
export const ProfileLink = styled.a`
  text-decoration: none;
  transition: color 0.5s;
`
export const ProfileAuthor = styled.h1`
  font-weight: 600;
  color: #42a5f5;
  font-size: 1.4rem;
  margin: 0.5rem auto 0.5rem;

  ${media.lessThan("medium")`
    font-size: 1.0rem;;
`}
`

export const ProfileTitle = styled.small`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;

  ${media.lessThan("medium")`
    font-size: 0.8rem;
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("medium")`
    font-size: 0.8rem;
  `}
`
