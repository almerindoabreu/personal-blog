import styled from "styled-components"
import media from "styled-media-query"
import Day from "../../icons/DayIcon.js";
import Night from "../../icons/NightIcon.js";

import { LightbulbFill as Light } from "@styled-icons/bootstrap/LightbulbFill";

export const NightModeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70px;

  ${media.lessThan("830px")`
  `}
`

export const IconWrapper = styled.a`
  width: 30px;
  cursor: pointer;
`

export const IconNight = styled(Light)`
 
`
export const IconNightWrapper = styled.div`
  display: "block";
  margin-top: 4px;
  height: 25px;
  width: 25px;
  & svg{
    fill: ${props => (props.active == false ? "#3DA5F5" : "#C4C4C4")}; 
  } 
`
