import React from 'react';

import * as S from "./styled"

const Modal = ({ handleClose, show, children }) => {
  
    return (
        <S.ModalBlur show={show}>
        <S.ModalWrapper show={show}>
            <S.ModalSection className="modal-main">
            {children}
            <S.ModalButton onClick={handleClose}>Fechar</S.ModalButton>
            </S.ModalSection>
        </S.ModalWrapper>
      </S.ModalBlur>
    );
  };

  export default Modal;