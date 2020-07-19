import React from "react";

import SkillsExperience from "../SkillsExperience"

import * as S from './styled'

const MoreSkills = () => {
    return (
        <S.MoreSkillsWrapper>
            <S.MoreSkillsGroup>
                <S.MoreSkillsTitle>Todas as Skills Apresentada no Blog</S.MoreSkillsTitle>
                <S.MoreSkillsText>
                    O cálculo realizado para definir a quantidade de experiência não é baseado em nenhuma métrica científica ou teórica,
                    é apenas uma forma de visualizar o quanto de conteúdo referente a determinado assunto esse website aborda.
                </S.MoreSkillsText>
                <S.MoreSkillsText>
                    • Cheat Sheet = 20 exp.
                    <br/>
                    • Artigo = 25 exp.
                    <br/>
                    • Projeto = 50 exp.
                </S.MoreSkillsText>
            </S.MoreSkillsGroup>
            <S.MoreSkillsGroup>
                <SkillsExperience moreSkillsLink={false} countLine={100}/>
            </S.MoreSkillsGroup>
        </S.MoreSkillsWrapper>
    )
}

export default MoreSkills;