import * as React from 'react';
import { Wrapper } from './wrapper';
import { ModalHeader } from '../ModalHeader';
import { ModalBody } from '../ModalBody';

export const Modal = (props: any) => {
  return (
    <Wrapper className='dwc-modal'>
      <div className='dwc-modal-content'>
        <ModalHeader />
        <ModalBody />
      </div>
    </Wrapper>
  );
};
