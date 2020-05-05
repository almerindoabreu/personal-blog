import React from "react"

import * as S from "./styled"

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
        <S.PaginationMovePage to={prevPage}>Anterior</S.PaginationMovePage>
      )}

      {!isLast && (
        <S.PaginationMovePage to={nextPage}>Próxima</S.PaginationMovePage>
      )}
    </S.WrapperPaginationMovePage>
  </S.WrapperPagination>
)

export default Pagination
