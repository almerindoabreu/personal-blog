import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import media from "styled-media-query"

export const PostItemWrapper = styled.div`
  min-height: 94vh;
  padding: 4rem 0 0 0;
  display: flex;

  flex-wrap: wrap;
`

export const PostItem = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  color: #fff;
  padding: 1rem;

  ${media.lessThan("900px")`
    width: 100%;
  `}
`

export const PostLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

export const PostItemDivHeader = styled.div`
  display: flex;
  flex-direction: row;
`

export const PostItemMainImage = styled.img`
  border-radius: 50%;
  border: #fff solid 1px;
  min-height: 4.75rem;
  min-width: 4.75rem;
  max-height: 4.75rem;
  max-width: 4.75rem;
`

export const PostItemTitle = styled.text`
  margin: 0 0.8rem 0 0.8rem;
  font-weight: 600;
  color: #42a5f5;
  font-size: 1.4rem;
`

export const PostItemDivSubTitle = styled.div`
  padding: 0.8rem 0 0.8rem 0;
`

export const PostItemSubTitle = styled.text`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
`

export const PostItemDivFooter = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostItemlabelFooter = styled.text`
  font-size: 0.7rem;
  font-weight: 300;
  line-height: 1.4;
`
