import React, { useState, useEffect } from "react"

import { useStaticQuery, graphql } from "gatsby"


import ModalCalculoSkills from "../ModalCalculoSkills"
import ModalExtratoSkill from "../ModalExtratoSkill"
import Modal from "../Modal"

import * as S from "./styled"

const SkillsExperience = ({ moreSkillsLink = true, countLine = 0 }) => {
  
  const [showSkills, setShowSkills] = useState(true)
  const [modalCalculoSkills, setModalCalculoSkills] = useState(false)
  const [maxExperienceSkills, setMaxExperienceSkills] = useState(countLine);
  const [countLineSkills, setCountLineSkills] = useState(12);
  const [skills, setSkills] = useState([]);

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "(posts|projects)/.*.md$/"}}) {
        edges {
          node {
            id
            frontmatter {
              keyWords
              category
            }
          }
        }
      }
    }
  `);

  const contents = data.allMarkdownRemark.edges;
 
  useEffect(() => {
    const verifySizeOfScreen = () => {
      if (window.innerWidth <= 550) setShowSkills(false)
      if (window.innerHeight <= 660) setCountLineSkills(6);
    }
    getSkills(contents);
    
    verifySizeOfScreen()
  }, [])

  const getSkills = (contents) => {
    let skills = [];

    contents.map((
      {
        node: {
          frontmatter: {
            keyWords,
            category,
          },
        },
      },
      i) => {
        let keys = keyWords.split(', ');
        keys.map(key => {
          let skill = {key: key, category: category};
          skills.push(skill);
        })
      })

      const skillsFormatter = calculateSkills(skills);
      getMaxExperience(skillsFormatter);
      setSkills(skillsFormatter);
  }

  const calculateSkills = (skills) => {
    const keys = getUnicKeys(skills);
    let skillsFormatter = [];
    keys.map(key => {
      let count = 0;
      skills.map(skill => {
        if(key.value == skill.key){
          count = count + calculateWeightCategory(skill.category);
        }
      })
      skillsFormatter.push({name: key.value, experience: count})
    })


    // sort by experience
    skillsFormatter.sort(function (a, b) {
      return b.experience - a.experience;
    });
    
    return skillsFormatter;
  }

  const calculateWeightCategory = (category) => {
    switch (category) {
      case "Artigo":
        return 25;
      case "CheatSheet":
        return 20;
      case "Projeto":
        return 50;
      default:
        return 0;
    }
  }

  const getMaxExperience = (skills) => {
    let max = 0;
    skills.map(skill => {
      if(skill.experience > max){
        max = skill.experience;
      }
    })

    setMaxExperienceSkills(max);
  }

  const getUnicKeys = (skills) => {
    let keys = [];

    skills.map(skill => {
      let flag = 1;
      keys.map(key => {
        if(key.value == skill.key)
          flag = -1;
      })
      if(flag == 1){
        keys.push({value: skill.key});
      }
    })

    return keys;
  }

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
        <S.HelpSkillsCountLink onClick={() => openModalCalculoSkills()} show={(showSkills && moreSkillsLink) == true ? "visible" : "hidden"}>
          <S.HelpSkillsCountIcon />
        </S.HelpSkillsCountLink>
      </S.TitleWrapper>
      <S.WrapperSkillsItens show={showSkills == true ? "visible" : "hidden"}>
        {skills.map((skill, i) => {
          if(countLineSkills > i){
            return (
              <S.SkillItem key={i}>
                <S.SkillsLabelWrapper>
                  <S.SkillLabel>{skill.name}</S.SkillLabel>
                  <S.SkillLabel>{skill.experience + " exp."} </S.SkillLabel>
                </S.SkillsLabelWrapper>
                <S.SkillBar
                  experiencePorcent={(skill.experience / maxExperienceSkills) * 100}
                ></S.SkillBar>
              </S.SkillItem>
            )
          }
        }
        )}
      </S.WrapperSkillsItens>
      <S.MoreSkills show={(showSkills && moreSkillsLink) == true ? "visible" : "hidden"}>
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
