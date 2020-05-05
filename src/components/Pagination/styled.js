import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"

export const WrapperPagination = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
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

export const PaginationMovePage = styled(Link)`
  text-decoration: none;
  color: #fff;
`
