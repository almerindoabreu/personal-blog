import styled from "styled-components"
import media from "styled-media-query"

export const MoreSkillsWrapper = styled.div`
    height: 92vh;
    margin-top: 2rem;
    padding: 2rem;

    display: flex;
    flex-direction: row;

    ${media.lessThan("960px")`
        flex-direction: column;
    `}

    ${media.lessThan("650px")`
        flex-direction: column;
        padding: 1rem;
    `}
`

export const MoreSkillsGroup = styled.div`
    width: 50%;

    ${media.lessThan("960px")`
        width: 100%;
    `}
`

export const MoreSkillsTitle = styled.h1`
    text-align: left;
    font-weight: 600;
    color: #42a5f5;
    font-size: 1.4rem;

    ${media.lessThan("medium")`
        font-size: 1.0rem;
    `}
`

export const MoreSkillsText = styled.p`
    font-weight: 600;
    margin: 1.5rem 0px 0.5rem;
    color: white;

    text-align: left;
    font-weight: 300;
    

    ${media.lessThan("medium")`
        font-size: 1.0rem;;
    `}
`