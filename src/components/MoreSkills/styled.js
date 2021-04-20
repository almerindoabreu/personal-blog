import styled from "styled-components"
import media from "styled-media-query"

export const MoreSkillsWrapper = styled.div`
    margin-top: 2rem;
    padding: 2rem;

    display: flex;
    flex-direction: row;

    ${media.lessThan("960px")`
        flex-direction: column;
    `}

    ${media.lessThan("650px")`
        flex-direction: column;
        padding: 2rem 0rem;
    `}
`

export const MoreSkillsGroup = styled.div`
    width: 50%;

    ${media.lessThan("960px")`
        width: 100%;
    `}
`

export const MoreSkillsTitle = styled.h1`
    color: #42a5f5;
    font-size: 1.4rem;

    font-size: 2rem;
  font-weight: 700;
  margin: 1rem auto;

  ${media.lessThan("830px")`
      font-size: 3rem;
    `}

  ${media.lessThan("650px")`
    font-size: 1.4rem;
    padding: 0 0rem;
  `}
`

export const MoreSkillsText = styled.p`
margin: 2rem 0rem;
color: var(--texts);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;

    ${media.lessThan("830px")`
      font-size: 1rem;
    `}

    ${media.lessThan("650px")`
      font-size: 1rem;
    `}
    
`