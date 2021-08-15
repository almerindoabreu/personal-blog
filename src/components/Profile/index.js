import React from "react"
import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = ({isDarkMode}) => (
  <S.ProfileWrapper>
    <Avatar isDarkMode={isDarkMode}/>
    <S.ProfileAuthor>Almerindo Abreu</S.ProfileAuthor>
    <S.ProfileTitle>Eng. de Computação</S.ProfileTitle>
    <S.ProfileDescription>
      Desenvolvedor full-stack, e escritor desse espaço que chamo de blog
    </S.ProfileDescription>
  </S.ProfileWrapper>
)

export default Profile
