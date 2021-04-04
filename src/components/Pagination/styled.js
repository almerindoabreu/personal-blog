import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const WrapperPagination = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--texts);
  justify-content: space-between;
  padding: 0.8rem 1.8rem;
`

export const PaginationNumber = styled.text`
  margin: auto 0;
`

export const WrapperPaginationMovePage = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
`

export const PaginationMovePage = styled(AniLink)`
  text-decoration: none;
  color: var(--texts);
`
