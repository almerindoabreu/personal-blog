import React from 'react';
import styled from "styled-components"
import media from 'styled-media-query'

export const ModalCalculoSkillsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;
    margin: auto;

    background: #16202c;
`

export const ModalCalculoSkillsTitle = styled.h1`
  font-weight: 600;
  color: #42a5f5;
  font-size: 1.4rem;
  margin: 0.5rem auto 0.5rem;

  ${media.lessThan("medium")`
    font-size: 1.0rem;;
`}
`

export const ModalCalculoSkillsDescription = styled.p`
    font-weight: 600;
    margin: 1.5rem 0px 0.5rem;
    color: white;

    text-align: left;
    font-weight: 300;
    

    ${media.lessThan("medium")`
        font-size: 1.0rem;;
    `}
`
