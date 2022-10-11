import * as React from 'react';
import { Wrapper } from './wrapper';
export const PDFViewerContainer = (props: any) => {
  return (
    <Wrapper className='dwc-hide'>
      <div id='canvas_container' className='dwc-pdf-canvas-container'>
        <div className='canvas' id='pdf_renderer'></div>
      </div>
    </Wrapper>
  );
};
