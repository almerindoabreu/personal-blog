import React from "react"
import * as S from "./styled"

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
                <S.PostItemDivHeader>
                  <S.PostItemMainImage src={image} />
                  <S.PostItemTitle>{title}</S.PostItemTitle>
                </S.PostItemDivHeader>
                <S.PostItemDivSubTitle>
                  <S.PostItemSubTitle>{description}</S.PostItemSubTitle>
                </S.PostItemDivSubTitle>
                <S.PostItemDivFooter>
                  <S.PostItemlabelFooter>
                    {category + " • " + keyWords}
                  </S.PostItemlabelFooter>
                  <S.PostItemlabelFooter>
                    {date + " • " + timeToRead + " min de leitura"}
                  </S.PostItemlabelFooter>
                </S.PostItemDivFooter>
              </S.PostLink>
            </S.PostItem>
          )
        }
      )}
    </S.PostItemWrapper>
  )
}

export default PostItem
