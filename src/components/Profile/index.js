import React from "react"
import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = () => (
  <S.ProfileWrapper>
    <Avatar />
    <S.ProfileAuthor>Almerindo Abreu</S.ProfileAuthor>
    <S.ProfileTitle>Eng. de Computação</S.ProfileTitle>
    <S.ProfileDescription>
      Desenvolvedor full stack, apaixonado por tecnologia, vídeo game e novos
      desafios.
    </S.ProfileDescription>
  </S.ProfileWrapper>
)

export default Profile
