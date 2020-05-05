import React, { useState } from "react"

import skills from "./content"
import ModalCalculoSkills from "../ModalCalculoSkills"
import ModalExtratoSkill from "../ModalExtratoSkill"

import * as S from "./styled"

const SkillsExperience = () => {
  const [showSkills, setShowSkills] = useState(true)

  const handleShowSkills = () => {
    setShowSkills(!showSkills)
  }

  return (
    <S.WrapperSkillsExperience>
      <S.TitleWrapper>
        <S.SkillsExperienceTitle>Skills</S.SkillsExperienceTitle>
        <S.SkillsExperienceShowMobile onClick={() => handleShowSkills()}>
          <S.SkillsExperienceShowIcon
            show={showSkills == true ? "visible" : "hidden"}
          />
          <S.SkillsExperienceHiddenIcon
            show={showSkills == false ? "visible" : "hidden"}
          />
        </S.SkillsExperienceShowMobile>
        <S.HelpSkillsCountLink>
          <S.HelpSkillsCountIcon />
        </S.HelpSkillsCountLink>
      </S.TitleWrapper>
      <S.WrapperSkillsItens show={showSkills == false ? "visible" : "hidden"}>
        {skills.map((skill, i) => (
          <S.SkillItem key={i}>
            <S.SkillsLabelWrapper>
              <S.SkillLabel>{skill.name}</S.SkillLabel>
              <S.SkillLabel>{skill.experience + " exp."} </S.SkillLabel>
            </S.SkillsLabelWrapper>
            <S.SkillBar
              experiencePorcent={skill.experiencePorcent}
            ></S.SkillBar>
          </S.SkillItem>
        ))}
      </S.WrapperSkillsItens>
      <S.MoreSkills show={showSkills == false ? "visible" : "hidden"}>
        <S.MoreSkillsLink href="/moreSkills" alt="Mais skills">
          Mais Skills ...
        </S.MoreSkillsLink>
      </S.MoreSkills>
    </S.WrapperSkillsExperience>
  )
}

export default SkillsExperience
