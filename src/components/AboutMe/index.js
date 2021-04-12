import React from "react"
import * as S from "./styled"

const AboutMe = ({ about }) => {
  return (
    <S.AboutMeWrapper>
      {about.map(
        (
          {
            node: {
              html,
            },
          },
          i
        ) => (
          <S.AboutMe key={i}>
              <S.AboutMeDescription>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
              </S.AboutMeDescription>
          </S.AboutMe>
        )
      )}
    </S.AboutMeWrapper>
  )
}

export default AboutMe
