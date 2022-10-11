import * as React from 'react';
import { Wrapper } from './wrapper';
import { PreviewNoteContainer } from '../PreviewNoteContainer';

export const ImageContainer = (props: any) => {
  const { url } = props;
  return (
    <Wrapper className='dwc-flex-container'>
      <div className='dwc-modal-img-container'>
        <img
          className='dwc-modal-img'
          src={`${url}`}
          alt='image preview section'
        />
      </div>

      <PreviewNoteContainer />
    </Wrapper>
  );
};
