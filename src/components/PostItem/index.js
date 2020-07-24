import React from "react"
import * as S from "./styled"

import { TimeFive } from "@styled-icons/boxicons-solid/TimeFive"

const PostItem = props => {
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
              <S.PostItem key={i}>
                <S.PostLink to={slug}>
                  <S.PostItemWrapperGroup>
                    <S.PostItemGroup>
                          <S.PostItemTitle>{title}</S.PostItemTitle>
                          <S.PostItemSubTitle>{description}</S.PostItemSubTitle>
                        <S.PostItemlabelFooter>
                          <S.PostItemIconPurchaseTag />{category + " • " + keyWords}
                        </S.PostItemlabelFooter>
                        <S.PostItemlabelFooter>
                          <S.PostItemIconTimeFive /> {date + " • " + timeToRead + " min de leitura"}
                        </S.PostItemlabelFooter>
                    </S.PostItemGroup>
                      <S.PostItemImage>
                          <S.PostItemMainImage src={image} />
                      </S.PostItemImage>
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
