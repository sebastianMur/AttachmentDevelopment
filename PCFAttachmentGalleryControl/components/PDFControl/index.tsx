import * as React from 'react';
import { Wrapper } from './wrapper';
export const PDFControl = (props: any) => {
  const { changePdfPage, setPdfPage, zoomPdfPage } = props;
  return (
    <Wrapper className='dwc-flex-container dwc-pageinput-container dwc-hide'>
      <i
        className='header-icon ms-Icon ms-Icon--ChevronLeft'
        onClick={() => changePdfPage(-1)}
      ></i>

      <div>
        <input
          className='dwc-page-input'
          type='text'
          value={1}
          onKeyDown={e => setPdfPage(e)}
        />
        <span className='dwc-page-span'>/ 0</span>
      </div>

      <i
        className='header-icon ms-Icon ms-Icon--ChevronRight'
        onClick={() => changePdfPage(1)}
      ></i>

      <div className='dwc-zoom-container'>
        <span>Zoom: </span>
        <i
          className='header-icon dwc-side-margin-4 ms-Icon ms-Icon--Add'
          onClick={() => zoomPdfPage(0.2)}
        ></i>
        <i
          className='header-icon dwc-side-margin-4 ms-Icon ms-Icon--Remove'
          onClick={() => zoomPdfPage(0.2)}
        ></i>
      </div>
    </Wrapper>
  );
};
