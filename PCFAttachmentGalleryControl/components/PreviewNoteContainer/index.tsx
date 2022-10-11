import * as React from 'react';
import { Wrapper } from './wrapper';
export const PreviewNoteContainer = (props: any) => {
  const { imageText } = props;
  return (
    <Wrapper className='dwc-modal-notetext-container dwc-hide'>
      <p className='dwc-modal-notetext'>{imageText}</p>
    </Wrapper>
  );
};
