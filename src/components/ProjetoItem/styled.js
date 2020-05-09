import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"

export const ProjetoItemWrapper = styled.div`
  min-height: 94vh;
  padding: 4rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
`

export const ProjetoItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  color: #fff;
  padding: 1rem;
`

export const ProjetoItemMainImage = styled.img`
  min-height: 20rem;
  min-width: 20rem;
  max-height: 20rem;
  max-width: 20rem;
`

export const ProjetoContentWrapper = styled.div`
  margin: 0 2rem 0 2rem;
`

export const ProjetoItemTitle = styled.h1`
  margin: 0 0.8rem 0 0.8rem;
  font-weight: 600;
  color: #42a5f5;
  font-size: 1.4rem;
`

export const ProjetoItemDescription = styled.p`
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  height: 85%;
`
export const ProjetoLinksWrapper = styled.div``

export const ProjetoLink = styled(Link)`
  padding: 0.8rem;
  color: #42a5f5;
  font-size: 0.9rem;
  text-decoration: none;
`
