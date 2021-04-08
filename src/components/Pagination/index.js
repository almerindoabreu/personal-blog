import React from "react"

import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"


const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.WrapperPagination>
    <S.PaginationNumber>{currentPage + " / " + numPages} </S.PaginationNumber>
    <S.WrapperPaginationMovePage>
      {!isFirst && (
        <S.PaginationMovePage 
        to={prevPage}
        cover
        direction="down"
        bg={getThemeColor()}
        duration={0.6}>
          Anterior
        </S.PaginationMovePage>
      )}

      {!isLast && (
        <S.PaginationMovePage to={nextPage}
          cover
          direction="down"
          bg={getThemeColor()}
          duration={0.6}>
            Próxima
        </S.PaginationMovePage>
      )}
    </S.WrapperPaginationMovePage>
  </S.WrapperPagination>
)

export default Pagination
