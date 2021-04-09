import styled from "styled-components"
import media from "styled-media-query"

 
export const FooterWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: row;

  ${media.lessThan("750px")`
    margin-bottom: 55px;
  `}
`

export const FooterCopyRight = styled.text`
  color: var(--texts);
  font-size: 0.8rem;
  margin: 0.8rem;
`
