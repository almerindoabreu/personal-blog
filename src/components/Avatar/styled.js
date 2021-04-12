import styled from "styled-components"
import media from "styled-media-query"

export const AvatarWrapper = styled.div`
  border-radius: 50%;
  margin: auto;
  height: 100px;
  width: 100px;
  ${media.lessThan("medium")`
    height: 1.875rem;
    width: 1.875rem;
`};
`
