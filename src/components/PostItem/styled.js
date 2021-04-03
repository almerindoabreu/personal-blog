import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import media from "styled-media-query"

import { TimeFive } from "@styled-icons/boxicons-solid/TimeFive"
import { PurchaseTag } from "@styled-icons/boxicons-solid/PurchaseTag"

export const PostItemWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  padding: 4rem 0 0 0;

  ${media.lessThan("650px")`
    padding: 1rem 0 0 0;
  `}

`

export const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--texts);
  padding: 1rem;

  ${media.greaterThan("1800px")`
    width: 50%;
  `}

  ${media.lessThan("1320px")`
    width: 100%;
  `}

  ${media.lessThan("900px")`
    width: 100%;
  `}

`

export const PostLink = styled(Link)`
  text-decoration: none;
  color: var(--texts);
  height: 100%;
`

export const PostItemWrapperGroup = styled.div`
  display: flex;
  flex-direction: row;

  ${media.lessThan("900px")`
    flex-direction: column;
  `}
`

export const PostItemMainImage = styled.img`
  border: #fff solid 0px;
  width: 210px;
  margin: auto;

  ${media.lessThan("900px")`
    width: 100%;
  `}
`

export const PostItemTitle = styled.text`
  font-weight: 500;
  color: #42a5f5;
  font-size: 28px;

  ${media.lessThan("1000px")`
    font-size: 24px;
  `}
`

export const PostItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 760px;
  padding: 0.6rem 0.8rem;

  ${media.lessThan("900px")`
    width: auto;
  `}

  ${media.lessThan("650px")`
    padding: 0px;
    margin: 12px 0px;
  `}
`


export const PostItemSubTitle = styled.text`
  font-size: 18px;
  font-weight: 300;
  margin: 12px 0px;

  ${media.lessThan("1000px")`
    font-size: 16px;
  `}
`

export const PostItemImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 0.8rem;

  ${media.lessThan("650px")`
    padding: 0px;
  `}
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
