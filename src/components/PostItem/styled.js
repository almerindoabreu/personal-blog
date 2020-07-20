import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import media from "styled-media-query"

import { TimeFive } from "@styled-icons/boxicons-solid/TimeFive"
import { PurchaseTag } from "@styled-icons/boxicons-solid/PurchaseTag"

export const PostItemWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  padding: 4rem 0 0 0;
`

export const PostItem = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  color: #fff;
  padding: 1rem;

  ${media.greaterThan("1800px")`
    width: 33%;
  `}

  ${media.lessThan("900px")`
    width: 100%;
  `}
`

export const PostLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  height: 100%;
`

export const PostItemWrapperGroup = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const PostItemMainImage = styled.img`
  border: #fff solid 0px;
  width: auto;
  height: 250px;
  margin: auto;
`

export const PostItemTitle = styled.text`
  font-weight: 500;
  color: #42a5f5;
  font-size: 1.1rem;
`

export const PostItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.6rem 0.8rem;
`

export const PostItemSubTitle = styled.text`
  font-size: 1rem;
  font-weight: 300;
  
`

export const PostItemImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PostItemDivFooter = styled.div`
  display: flex;
  flex-direction: column;
  
`

export const PostItemIconTimeFive = styled(TimeFive)`
  height: 12px;
  width: 12px;

  margin: 4px 4px 4px 0px;
`

export const PostItemIconPurchaseTag = styled(PurchaseTag)`
  height: 12px;
  width: 12px;

  margin: 4px 4px 4px 0px;
`


export const PostItemlabelFooter = styled.text`
  font-size: 0.7rem;
  font-weight: 300;
  line-height: 1.4;
`
