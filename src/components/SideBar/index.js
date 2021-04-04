import React from "react"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import SkillsExperience from "../SkillsExperience"

import * as S from "./styled"

const SideBar = ({ isPost, isDarkMode }) => (
  <S.SideBarWrapper isPost={isPost}>
    <Profile isDarkMode={isDarkMode}/>
    <SocialLinks />
    <SkillsExperience />
  </S.SideBarWrapper>
)

export default SideBar
