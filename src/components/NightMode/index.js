import React from "react";
import * as S from "./styled"


const NightMode = (props) => {

  const activeNightMode = (mode) => {
    props.setNightMode(mode);
    window.__setPreferredTheme(mode ? "dark" : "light");
    console.log("setNightMode(!nightMode);")
  }

  return (
    <S.NightModeWrapper>

      <S.IconWrapper onClick={() => activeNightMode(!props.isDarkMode)}>
        <S.IconNightWrapper active={props.isDarkMode}>
          <S.IconNight  />
        </S.IconNightWrapper>
      </S.IconWrapper>

    </S.NightModeWrapper>
  ); 
};

export default NightMode