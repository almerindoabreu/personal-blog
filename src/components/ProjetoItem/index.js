import React from "react"
import * as S from "./styled"

const ProjetoItem = ({ projetos }) => {
  const artigoLink = paper => {
    const haveArtigo = paper ? true : false
    if (haveArtigo) return <S.ProjetoLink to={paper}>Artigo</S.ProjetoLink>
  }

  return (
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
                {artigoLink(paper)}
              </S.ProjetoLinksWrapper>
            </S.ProjetoContentWrapper>
          </S.ProjetoItem>
        )
      )}
    </S.ProjetoItemWrapper>
  )
}

export default ProjetoItem
