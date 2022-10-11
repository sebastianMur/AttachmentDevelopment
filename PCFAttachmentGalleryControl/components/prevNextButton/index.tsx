import * as React from 'react';
import { Wrapper } from './wrapper';

export const PreviewButtons = (props: any) => {
  const {
    className,
    changeImage,
    option,
    ornament,
    anotationId,
    thumbnailsArray,
  } = props;

  return (
    <Wrapper
      className={className}
      onClick={() => changeImage(anotationId, option, thumbnailsArray)}
    >
      {ornament === 'left' ? <> &#10095;</> : <> &#10094; </>}
    </Wrapper>
  );
};
