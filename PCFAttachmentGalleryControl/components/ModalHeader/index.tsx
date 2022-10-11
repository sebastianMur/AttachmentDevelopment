import * as React from 'react';
import { ModalButtons } from '../ModalButtons';
import { PDFControl } from '../PDFControl';

import { Wrapper } from './wrapper';
export const ModalHeader = (props: any) => {
  return (
    <Wrapper className='dwc-modal-header'>
      <h3>1 / 12 Title 0</h3>
      <PDFControl />
      <ModalButtons />
    </Wrapper>
  );
};
