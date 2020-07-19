import React, { useState, useEffect } from "react"

import skills from "./content"
import ModalCalculoSkills from "../ModalCalculoSkills"
import ModalExtratoSkill from "../ModalExtratoSkill"
import Modal from "../Modal"

import * as S from "./styled"

const SkillsExperience = () => {
  const [showSkills, setShowSkills] = useState(true)
  const [modalCalculoSkills, setModalCalculoSkills] = useState(false)
  
  useEffect(() => {
    const verifySizeOfScreen = () => {
      if (window.innerWidth <= 550) setShowSkills(false)
    }

    verifySizeOfScreen()
  }, [])

  const handleShowSkills = () => {
    setShowSkills(!showSkills)
  }

  const openModalCalculoSkills = () => {
    setModalCalculoSkills(!modalCalculoSkills);
  }

  return (
    <>
    <S.WrapperSkillsExperience>
      <S.TitleWrapper>
        <S.SkillsExperienceTitle>Skills</S.SkillsExperienceTitle>
        <S.SkillsExperienceShowMobile onClick={() => handleShowSkills()}>
          <S.SkillsExperienceShowIcon
            show={showSkills == false ? "visible" : "hidden"}
          />
          <S.SkillsExperienceHiddenIcon
            show={showSkills == true ? "visible" : "hidden"}
          />
        </S.SkillsExperienceShowMobile>
        <S.HelpSkillsCountLink onClick={() => openModalCalculoSkills()}>
          <S.HelpSkillsCountIcon />
        </S.HelpSkillsCountLink>
      </S.TitleWrapper>
      <S.WrapperSkillsItens show={showSkills == true ? "visible" : "hidden"}>
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
      <S.MoreSkills show={showSkills == true ? "visible" : "hidden"}>
        <S.MoreSkillsLink href="/moreSkills" alt="Mais skills">
          Mais Skills ...
        </S.MoreSkillsLink>
      </S.MoreSkills>
    </S.WrapperSkillsExperience >
      <Modal show={modalCalculoSkills} handleClose={openModalCalculoSkills}>
        <ModalCalculoSkills />
      </Modal>
    </>
  )
}

export default SkillsExperience
