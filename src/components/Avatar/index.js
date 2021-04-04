import React, { useState, useEffect } from "react"
import * as S from "./styled"
import AvatarDay from "./AvatarDay.js"
import AvatarNight from "./AvatarNight.js"
import AvatarAlreadyDay from "./AvatarAlreadyDay.js"

const Avatar = ({isDarkMode}) => {
  const [alreadyDay, setAlreadyDay] = useState(localStorage.getItem('alreadyDay'));

  useEffect(() => {
    var preferredTheme = localStorage.getItem('theme');

    if(isDarkMode != null){

      if(preferredTheme == "light" && !isDarkMode){
        localStorage.setItem('alreadyDay', (alreadyDay + 1));
      }else{
        localStorage.setItem('alreadyDay', 0);
      }
    }
  }, [isDarkMode])

  return (
    <S.AvatarWrapper id="avatar-logo">
      {isDarkMode ? 
        <AvatarNight /> :
        (alreadyDay > 0 ? <AvatarAlreadyDay /> : <AvatarDay />)
        
      }
    </S.AvatarWrapper>
  );
}

export default Avatar
