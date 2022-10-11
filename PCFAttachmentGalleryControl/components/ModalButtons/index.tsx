import * as React from 'react';
import { Wrapper } from './wrapper';
export const ModalButtons = (props: any) => {
  const { downloadFile, toggleNoteColumn, closeModal } = props;
  return (
    <Wrapper className='header-icon-container'>
      <i
        className='header-icon ms-Icon ms-Icon--Download'
        onClick={() => downloadFile()}
      ></i>
      <i
        className='header-icon ms-Icon ms-Icon--Info'
        onClick={() => toggleNoteColumn()}
      ></i>
      <i
        className='header-icon ms-Icon ms-Icon--Info'
        onClick={() => closeModal()}
      ></i>
    </Wrapper>
  );
};
