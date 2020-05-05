import React from "react"
import * as S from "./styled"

import projetos from "./content"

const ProjetoItem = () => (
  <S.ProjetoItemWrapper>
    {projetos.map((projeto, i) => (
      <S.ProjetoItem key={i}>
        <S.ProjetoItemMainImage></S.ProjetoItemMainImage>
        <S.ProjetoContentWrapper>
          <S.ProjetoItemTitle>{projeto.title}</S.ProjetoItemTitle>
          <S.ProjetoItemDescription>
            {projeto.description}
          </S.ProjetoItemDescription>
          <S.ProjetoLinksWrapper>
            <S.ProjetoLink>Read Me</S.ProjetoLink>
            <S.ProjetoLink>Artigo</S.ProjetoLink>
          </S.ProjetoLinksWrapper>
        </S.ProjetoContentWrapper>
      </S.ProjetoItem>
    ))}
  </S.ProjetoItemWrapper>
)

export default ProjetoItem
