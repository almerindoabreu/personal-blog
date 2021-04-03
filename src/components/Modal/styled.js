import styled from "styled-components";
import media from "styled-media-query"


export const ModalWrapper = styled.div`
    display: ${props => (props.show ? "block": "none")};
    position: fixed;
    z-index: 5;
    top: 50%;
    left: 50%;

    ${media.lessThan("650px")`
      top: 50%;
      left: 5%;
      right: 5%;
    `}
`

export const ModalBlur = styled.div`
    display: ${props => (props.show ? "block": "none")};
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    z-index: 5;
    background: rgba(0, 0, 0, 0.6);
`

export const ModalButton = styled.button`
    background: #42a5f5;
    color: white;
    margin: auto;

    padding: 5px 15px;

    border: none;
    border-radius: 8px;

    &:hover{
      background: #1683db;
      color: white;
      cursor: pointer;
    }
`
  
  export const ModalSection = styled.section`
    padding: 10px 10px 15px;
    position: relative;
    background: var(--background);
    left: -50%;
    width: 100%;
    height: auto;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);

    ${media.lessThan("650px")`
      left: 0%;

    `}
  `
