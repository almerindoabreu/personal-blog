import React from "react"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import SkillsExperience from "../SkillsExperience"

import * as S from "./styled"

const SideBar = () => (
  <S.SideBarWrapper>
    <Profile />
    <SocialLinks />
    <SkillsExperience />
  </S.SideBarWrapper>
)

export default SideBar
