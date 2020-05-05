import styled from "styled-components"
import Img from "gatsby-image"
import media from "styled-media-query"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  margin: auto;
  height: 3.75rem;
  width: 3.75rem;

  ${media.lessThan("medium")`
    height: 1.875rem;
    width: 1.875rem;
`}
`
