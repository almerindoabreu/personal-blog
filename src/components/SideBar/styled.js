import styled from "styled-components"
import media from "styled-media-query"

export const SideBarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid;
  background: #16202c;
  display: flex;

  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("830px")`
    margin-top: 3rem;
  `}
`
