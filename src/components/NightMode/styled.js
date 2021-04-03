import styled from "styled-components"
import media from "styled-media-query"
import Day from "../../icons/DayIcon.js";
import Night from "../../icons/NightIcon.js";

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

export const IconDayWrapper = styled.div`
  display: "block";
  & svg{
    fill: ${props => (props.active == true ? "#FEC01C" : "#C4C4C4")}; 
  } 
`
export const IconDay = styled(Day)`
 
`
export const IconNightWrapper = styled.div`
  display: "block";
  margin-top: 4px;
  & svg{
    fill: ${props => (props.active == true ? "#3DA5F5" : "#C4C4C4")}; 
  } 
`

export const IconNight = styled(Night)`
 
`