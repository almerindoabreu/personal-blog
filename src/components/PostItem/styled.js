import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"
import Img from "gatsby-image"

import { TimeFive } from "@styled-icons/boxicons-solid/TimeFive"
import { PurchaseTag } from "@styled-icons/boxicons-solid/PurchaseTag"

export const PostItemWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  padding: 4rem 0 0 0;
  
  ${media.lessThan("1150px")`
    max-width: 500px;
    margin: auto;
  `}


`

export const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--texts);

  z-index: 1;
  width: 45%;
  flex-wrap: wrap;

  min-height: 450px;
  border: 1px solid #757474;
  margin: 15px;


  ${media.greaterThan("1800px")`
    width: 45%;
  `}

  ${media.lessThan("1150px")`
    width: 100%;
  `}

  ${media.lessThan("900px")`
    width: 100%;
  `}

  
  ${media.lessThan("750px")`
    min-height: 300px;
    margin: 8px
  `}

  ${media.lessThan("650px")`
    min-height: 300px;
    margin: 5px
  `}

`

export const PostLink = styled(AniLink)`
  text-decoration: none;
  color: var(--texts);
  height: 100%;
  width: 100%;

  padding: 28px;

  ${media.lessThan("750px")`
    padding: 15px
  `}

  ${media.lessThan("650px")`
    padding: 15px
  `}

  
  &.hover_effect:hover div {
    color: var(--textsHover);
  }

  &.hover_effect div {
	position: relative;
	z-index: 5;
	
	transition: color var(--time);
}

  &.hover_effect {
    --width: 100%;
    --time: 1s;

    position: relative;

    overflow: hidden;
  }

&.hover_effect span {
	position: absolute;
	display: block;
	content: "";
	z-index: 0;
	width: 0px;
	height: 0px;

	border-radius: 100%;
	background: var(--backgroundHover);
	
	transform: translate(-50%, -50%);
	transition: width var(--time), padding-top var(--time);
}

&.hover_effect:hover span {
	width: calc(var(--width) * 5.25);
	padding-top: calc(var(--width) * 5.25);
}

&.hover_effect:hover img {
}

&.hover_effect img {
	position: relative;
	z-index: 5;
	
	transition: opacity var(--time) ease-in;
}

`

export const PostItemWrapperGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${media.lessThan("900px")`
    flex-direction: column;
  `}
`


export const PostItemTitle = styled.text`
  font-weight: 500;
  color: #42a5f5;
  font-size: 28px;

  margin: 5px 0px;

  ${media.lessThan("1000px")`
    font-size: 24px;
  `}

  ${media.lessThan("750px")`
    font-size: 18px;
  `}

  ${media.lessThan("650px")`
  font-size: 18px;
  `}
`

export const PostItemGroup = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  flex-wrap: wrap;

  ${media.lessThan("900px")`
    width: auto;
  `}

  ${media.lessThan("650px")`
    padding: 0px;
  `}
`


export const PostItemSubTitle = styled.text`
  font-size: 18px;
  font-weight: 300;

  margin: 5px 0px;
  
  ${media.lessThan("1000px")`
    font-size: 16px;
  `}

  ${media.lessThan("750px")`
    font-size: 14px;
  `}

  ${media.lessThan("650px")`
  font-size: 14px;
  `}
`

export const PostItemImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0px;

  width: 100%;
  max-height: 200px;
  overflow: hidden;

  border: solid .5px #999;
  border-radius: 10px;

  ${media.lessThan("750px")`
    max-height: 150px;
  `}

  ${media.lessThan("650px")`
  max-height: 150px;
  `}
`

export const PostItemMainImage = styled.img`
    -webkit-backface-visibility: hidden; 
    -ms-transform: translateZ(0); /* IE 9 */
    -webkit-transform: translateZ(0); /* Chrome, Safari, Opera */
    transform: translateZ(0);

    width: 100%;

  ${media.lessThan("900px")`
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


export const PostItemlabel = styled.text`
  font-size: 0.7rem;
  font-weight: 300;
  line-height: 1.4;
  margin: 0px 0px;
`

export const PostItemlabelKeyWords = styled.div`
  font-size: 0.7rem;
  font-weight: 300;
  line-height: 1.4;
  margin: 4px 0px;

`
