import * as React from 'react';
import { Wrapper } from './wrapper';

const generateImageSrcUrl = (fileType: string, fileContent: string): string => {
  return 'data:' + fileType + ';base64, ' + fileContent;
};
const setPdfImage = (body: string) => {
  return generateImageSrcUrl('image/png', body);
};
const showError = (text: string) => {
  console.error('ERROR:', text);
};
export const ThumbnailList = (props: any) => {
  const {
    context,
    thumbnailsArray: { entities },
    setPreviewFromThumbnail,
  } = props;

  const printThumbnails = (thumbnailsAttachments: any) => {
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

    return thumbnailsAttachments.map((thumbnailItem: any, index: number) => (
      <>
        <img
          id={thumbnailItem.annotationid}
          className='thumbnail'
          key={thumbnailItem.annotationid}
          src={imgURL(thumbnailItem)}
          alt={`${index}`}
          onClick={(e: any) => setPreviewFromThumbnail(e)}
        />
      </>
    ));
  };

  return (
    <Wrapper className='thumbnailsList'>{printThumbnails(entities)}</Wrapper>
  );
};
