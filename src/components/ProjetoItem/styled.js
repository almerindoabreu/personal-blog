import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import media from "styled-media-query"

export const ProjetoItemWrapper = styled.div`
  display: flex;
  padding: 4rem 0 0 0;
`

export const ProjetoItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  color: #fff;
  padding: 1rem;
  margin-bottom: 2rem;

  ${media.lessThan("650px")`
    padding: 0rem;
  `}
`

export const ProjetoItemMainImage = styled.img`
  display: ${props => (props.modo === "large" ? "block" : "none")};
  min-height: 20rem;
  min-width: 20rem;
  max-height: 20rem;
  max-width: 20rem;

  ${media.lessThan("1200px")`
    min-height: 16rem;
    min-width: 16rem;
    max-height: 16rem;
    max-width: 16rem;
  `}

  ${media.lessThan("1000px")`
    display: ${props => (props.modo === "small" ? "block" : "none")};
    padding: 1rem;
    max-width: 100%;
  `}
`

export const ProjetoContentWrapper = styled.div`
  margin: 0 2rem 0 2rem;

  ${media.lessThan("830px")`
    margin: 0 1rem;
  `}

  ${media.lessThan("730px")`
    margin: 0 0.5rem;
  `}

  ${media.lessThan("650px")`
    margin: 0 0rem;
  `}
`

export const ProjetoItemTitle = styled.h1`
  margin: 0 0.8rem 0 0.8rem;
  font-weight: 600;
  color: #42a5f5;
  font-size: 1.4rem;
`

export const ProjetoItemInfo = styled.small`
  margin: 0rem 0.8rem;
  color: #fff;
  font-size: 0.6rem;
`

export const ProjetoItemDescription = styled.p`
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
`
export const ProjetoLinksWrapper = styled.div``

export const ProjetoLink = styled(Link)`
  padding: 0.8rem;
  color: #42a5f5;
  font-size: 0.9rem;
  text-decoration: none;
`
