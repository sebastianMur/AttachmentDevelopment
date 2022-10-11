import * as React from 'react';
import { Wrapper } from './wrapper';
import { PreviewButtons } from '../prevNextButton';

const openModal = () => {};

const generateImageSrcUrl = (fileType: string, fileContent: string): string => {
  return 'data:' + fileType + ';base64, ' + fileContent;
};
const setPdfImage = (body: string) => {
  return generateImageSrcUrl('image/png', body);
};
const showError = (text: string) => {
  console.error('ERROR:', text);
};

export const PreviewSection = (props: any) => {
  const { context, changeImage, anotationId, thumbnailsArray } = props;

  const imgURL = (thumbnailItem: any) => {
    const { mimetype, documentbody } = thumbnailItem;

    return mimetype.indexOf('pdf') === -1
      ? generateImageSrcUrl(mimetype, documentbody)
      : context.resources.getResource(
          'pdf_icon.png',
          setPdfImage.bind(this),
          showError.bind(this, 'ERROR with PDF Image!'),
        );
  };

  const getSrc = (id: string): string => {
    const [firstRow] = thumbnailsArray.entities;
    let srcImg = '';
    if (id) {
      srcImg = imgURL(
        thumbnailsArray.entities.filter(
          (attachment: any) => attachment.annotationid === id,
        )[0],
      );
      return srcImg;
    }
    if (!srcImg) srcImg = imgURL(firstRow);

    return srcImg;
  };

  return (
    <Wrapper className='preview-section'>
      <img
        className='preview-img'
        onClick={() => openModal()}
        src={getSrc(anotationId)}
        alt='preview image'
      />

      <PreviewButtons
        className={`arrow-button preview-prev`}
        changeImage={changeImage}
        option={-1}
        anotationId={anotationId || thumbnailsArray.entities[0].annotationid}
        ornament={'right'}
        thumbnailsArray={thumbnailsArray}
      />
      <PreviewButtons
        className={`arrow-button preview-next`}
        changeImage={changeImage}
        option={1}
        anotationId={anotationId || thumbnailsArray.entities[0].annotationid}
        ornament={'left'}
        thumbnailsArray={thumbnailsArray}
      />
    </Wrapper>
  );
};
