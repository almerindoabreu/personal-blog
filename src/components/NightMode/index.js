import React, { useState } from "react";
import * as S from "./styled"

const NightMode = (props) => {

  const activeNightMode = (mode) => {
    props.setNightMode(mode);
    window.__setPreferredTheme(mode ? "dark" : "light");
    console.log("setNightMode(!nightMode);")
  }

  return (
    <S.NightModeWrapper>
      <S.IconWrapper onClick={() => activeNightMode(false)}>
        <S.IconDayWrapper active={!props.isDarkMode}>
          <S.IconDay  />
        </S.IconDayWrapper>
      </S.IconWrapper>
      <S.IconWrapper onClick={() => activeNightMode(true)}>
        <S.IconNightWrapper active={props.isDarkMode}>
          <S.IconNight  />
        </S.IconNightWrapper>

      </S.IconWrapper>
    </S.NightModeWrapper>
  ); 
};

export default NightMode