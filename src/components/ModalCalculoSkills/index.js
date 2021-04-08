import React, { useState, useEffect } from 'react';

import * as S from './styled'

const ModalCalculoSkills = () => {

    return (
        <S.ModalCalculoSkillsWrapper>
            <S.ModalCalculoSkillsTitle>
                Fórmula do Cálculo de Experiência de Skills
            </S.ModalCalculoSkillsTitle>
            <S.ModalCalculoSkillsDescription>
                O cálculo realizado para definir a quantidade de experiência não é baseado em nenhuma métrica científica ou teórica,
                é apenas uma forma de visualizar o quanto de conteúdo referente a determinado assunto esse website aborda.
            </S.ModalCalculoSkillsDescription>
            <S.ModalCalculoSkillsDescription>
            • Cheat Sheet = 20 exp.
            <br/>
            • Artigo = 25 exp.
            <br/>
            • Projeto = 50 exp.
            </S.ModalCalculoSkillsDescription>
        </S.ModalCalculoSkillsWrapper>
    )
}

export default ModalCalculoSkills;