import React, { useState } from "react";
import * as S from "./styled"

import dayIcon from "../../images/day.svg";
import nightIcon from "../../images/night.svg";

import getThemeColor from "../../utils/getThemeColor"

const NightMode = (props) => {
  const [nightMode, setNightMode] = useState(true);

  const activeNightMode = (mode) => {
    setNightMode(mode);
    window.__setPreferredTheme(props.isDarkMode ? "light" : "dark");
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