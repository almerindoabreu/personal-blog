import React from "react"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"
import effectHover from "../../utils/effectHover.js";

const PostItem = props => {
  effectHover();

  const postList = props.postList

  return (
    <S.PostItemWrapper>
      {postList.map(
        (
          {
            node: {
              frontmatter: {
                category,
                date,
                description,
                title,
                keyWords,
                image,
              },
              timeToRead,
              fields: { slug },
            },
          },
          i
        ) => {
          return (
              <S.PostItem key={i} >
                <S.PostLink 
                className="hover_effect"
                to={slug}
                cover
                direction="down"
                bg={getThemeColor()}
                duration={0.6}
                >
                <span />
                  <S.PostItemWrapperGroup >
                    <S.PostItemGroup>
                        <S.PostItemlabel>
                          <S.PostItemIconTimeFive /> {date + " • " + timeToRead + " min de leitura"}
                        </S.PostItemlabel>

                        <S.PostItemTitle>{title}</S.PostItemTitle>
                        <S.PostItemSubTitle>{description}</S.PostItemSubTitle>

                        <S.PostItemImage>
                          <S.PostItemMainImage src={image} />
                        </S.PostItemImage>
                    </S.PostItemGroup>

                    <S.PostItemlabelKeyWords>
                      <S.PostItemIconPurchaseTag />{category + " • " + keyWords}
                    </S.PostItemlabelKeyWords>
                  </S.PostItemWrapperGroup>
                </S.PostLink>
              </S.PostItem>
          )
        }
      )}
    </S.PostItemWrapper>
  )
}

export default PostItem
