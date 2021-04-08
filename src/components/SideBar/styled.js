import styled from "styled-components"
import media from "styled-media-query"

export const SideBarWrapper = styled.aside`
  align-items: center;
  background: var(--background);
  display: flex;

  flex-direction: column;
  height: 100vh;
  position: fixed;
  z-index: 200;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("920px")`
    margin-top: 2rem;
  `}

  ${media.lessThan("750px")`
    display: none;
    `}

  ${media.lessThan("650px")`
    display: none;
    margin-top: 2rem;
    padding-bottom: 0rem;
    height: auto;
    position: static;
    width:100%;
  `}

  ${media.lessThan("530px")`
    padding-top: 2rem;
  `}
`
