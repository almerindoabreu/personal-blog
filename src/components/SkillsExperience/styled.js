import styled from "styled-components"
import { HelpWithCircle } from "@styled-icons/entypo/HelpWithCircle"
import { ChevronBottom } from "@styled-icons/open-iconic/ChevronBottom"
import { ChevronTop } from "@styled-icons/open-iconic/ChevronTop"
import media from "styled-media-query"

export const WrapperSkillsExperience = styled.div`
  display: flex;
  flex-direction: column;
  background: #16202c;
  width: 100%;
`

export const TitleWrapper = styled.div`
  display: flex;
  text-align: left;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem;

  ${media.lessThan("medium")`
    margin: 0.2rem 0rem;
  `}
`

export const SkillsExperienceShowMobile = styled.a`
  display: none;
  margin-top: 5px;
  color: #fff;
  height: 15px;
  width: 15px;

  ${media.lessThan("medium")`
    display: block;
    margin: 0.2rem 0rem;
  `}
`

export const SkillsExperienceShowIcon = styled(ChevronBottom)`
  display: ${props => (props.show != "visible" ? "none" : "block")};
  cursor: pointer;
`

export const SkillsExperienceHiddenIcon = styled(ChevronTop)`
  display: ${props => (props.show != "visible" ? "none" : "block")};
  cursor: pointer;
`

export const HelpSkillsCountLink = styled.a`
  cursor: pointer;
`

export const HelpSkillsCountIcon = styled(HelpWithCircle)`
  margin-top: 5px;
  color: #fff;
  height: 15px;
  width: 15px;

  ${media.lessThan("medium")`
  margin-top: 0px;
`}
`

export const SkillsExperienceTitle = styled.h1`
  text-align: left;
  font-weight: 600;
  color: #42a5f5;
  font-size: 1.4rem;

  ${media.lessThan("medium")`
    font-size: 1.0rem;
`}
`
export const WrapperSkillsItens = styled.div`
  display: ${props => (props.show != "visible" ? "none" : "block")};
  width: 100%;
  margin: 0.5rem;

  ${media.lessThan("medium")`
    margin: 0.2rem 0rem;
  `}
`

export const SkillItem = styled.div`
  margin: 0.3rem 0rem;
`

export const SkillsLabelWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  justify-content: space-between;
`

export const SkillLabel = styled.label`
  color: #fff;
  font-size: 0.9rem;
`

export const SkillBar = styled.div`
  background-color: #fff;
  width: ${props => props.experiencePorcent}%;
  height: 10px;
`

export const MoreSkills = styled.div`
  display: ${props => (props.show != "visible" ? "none" : "block")};
  text-align: right;
`

export const MoreSkillsLink = styled.a`
  color: #42a5f5;
  font-size: 0.9rem;
  text-decoration: none;
`
