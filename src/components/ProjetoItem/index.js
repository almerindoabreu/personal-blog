import React from "react"
import * as S from "./styled"

const ProjetoItem = ({ projetos }) => (
  <S.ProjetoItemWrapper>
    {projetos.map(
      (
        {
          node: {
            frontmatter: {
              date,
              description,
              title,
              keyWords,
              image,
              readMe,
              paper,
            },
            html,
          },
        },
        i
      ) => (
        <S.ProjetoItem key={i}>
          <S.ProjetoItemMainImage
            modo="large"
            src={image}
          ></S.ProjetoItemMainImage>
          <S.ProjetoContentWrapper>
            <S.ProjetoItemTitle>{title}</S.ProjetoItemTitle>
            <S.ProjetoItemInfo>{date + " • " + keyWords}</S.ProjetoItemInfo>
            <S.ProjetoItemMainImage
              modo={"small"}
              src={image}
            ></S.ProjetoItemMainImage>
            <S.ProjetoItemDescription>
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </S.ProjetoItemDescription>
            <S.ProjetoLinksWrapper>
              <S.ProjetoLink to={readMe}>Read Me</S.ProjetoLink>
              <S.ProjetoLink to={paper}>Artigo</S.ProjetoLink>
            </S.ProjetoLinksWrapper>
          </S.ProjetoContentWrapper>
        </S.ProjetoItem>
      )
    )}
  </S.ProjetoItemWrapper>
)

export default ProjetoItem
