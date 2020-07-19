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
  z-index: 200;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("830px")`
    margin-top: 2rem;
  `}

  ${media.lessThan("650px")`
    display: ${props => (props.isPost === true ? "none" : "flex")};
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
