import * as React from 'react';
import { Wrapper } from './wrapper';
import { PreviewButtons } from '../prevNextButton';
import { ImageContainer } from '../ImageContainer';
import { PDFViewerContainer } from '../PDFViewerContainer';
export const ModalBody = (props: any) => {
  const { changeImage } = props;
  return (
    <Wrapper className='dwc-modal-body'>
      <PreviewButtons
        className={`arrow-button preview-next`}
        changeImage={changeImage}
        option={1}
        ornament={`&#10095;`}
      />
      <PreviewButtons
        className={`arrow-button preview-prev`}
        changeImage={changeImage}
        option={-1}
        ornament={`&#10094;`}
      />
      <ImageContainer />
      <PDFViewerContainer />
    </Wrapper>
  );
};
