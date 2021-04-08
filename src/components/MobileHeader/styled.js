import styled from "styled-components"
import media from "styled-media-query"
import { Menu } from "@styled-icons/entypo/Menu"

export const WrapperMobileHeader = styled.div`
  display: ${props => (props.mode === "small" ? "block" : "none")};
  

  ${media.lessThan("750px")`
    display: ${props => (props.mode === "small" ? "block" : "none")};
    
    position: fixed;
    top: 0;

    height: 50px;
    width: 100%;

    z-index: 0;

    border-top: solid 1px var(--border);
    background: var(--background);
  `}
  
`

export const MobileHeaderGroup = styled.div`
  display: flex;
  flex-direction: row;

  margin: 5px auto;

  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export const WrapperHeaderText = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`
export const MobileHeaderText = styled.div`
  color: var(--highlight);
`
export const MobileHeaderSubText = styled.div`
  color: var(--texts);
  font-size: 12px;
`
export const WrapperMobileHeaderAvatar = styled.div`


  & div {
    width: 0px;
    height: 0px;
  }

  ${media.lessThan("750px")`
    display: ${props => (props.mode === "small" ? "flex" : "none")};

    & div {
      width: 30px;
      height: 30px;
    }

  `}
`

export const WrapperMobileHeaderMenu = styled.button`
  background-color: var(--background);
  border: none;
  cursor: pointer;
`


export const NavbarMobileIconWrapper = styled.button`
  background-color: var(--background);
  border: none;
  cursor: pointer;
`

export const MobileMenuIcon = styled(Menu)`
  width: 30px;
  height: 30px;
  color: var(--texts);;
`