import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;
  position: relative;

  ${media.lessThan("750px")`
    flex-direction: column;
  `}
`

export const LayoutSideBar = styled.div`
  display: flex;
  flex-direction: column;
`

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 0 0 20rem;
  transition: var(--background), color 0.5s;
  width: 100%;

  ${media.lessThan("750px")`
    padding: 0rem 1rem;
  `}
`
