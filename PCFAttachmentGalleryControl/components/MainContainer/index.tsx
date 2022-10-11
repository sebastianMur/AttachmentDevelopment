import * as React from 'react';
import { Wrapper } from './wrapper';
import { useEffect, useState, useCallback } from 'react';
import { PreviewSection } from '../PreviewSection';
import { ThumbnailList } from '../Thumbnails';
import useApi from '../../hooks/apiCalls';
import { RetrieveMultiple } from '../../services/account/retrieveMultiple';
import { GetAttachmentsDemo } from './logic';

export const MainContainer = (props: any) => {
  const { context, id } = props;
  const [anotationId, setAnotationId] = useState(() => {
    return '';
  });
  const getAllAttachements = useApi(RetrieveMultiple);

  useEffect(() => {
    getAllAttachements.request(context, id);
  }, []);

  const setPreviewFromThumbnail = useCallback(
    (e: any) => {
      console.log(e.target.id);
      setAnotationId(e.target.id);
    },
    [anotationId],
  );

  const changeImage = useCallback(
    (annotationid: string, option: number, attachments: any) => {
      const { entities } = attachments;
      const attachmentLength = entities.length;
      if (attachmentLength === 0) return;
      const index = entities.indexOf(
        entities.filter(
          (attachment: any) => annotationid === attachment.annotationid,
        )[0],
      );
      if (index === 0 && option === -1)
        setAnotationId(entities[attachmentLength - 1].annotationid);
      if (index === 0 && option === 1)
        setAnotationId(entities[index + 1].annotationid);

      if (index === attachmentLength - 1 && option === 1)
        setAnotationId(entities[0].annotationid);

      if (index === attachmentLength - 1 && option === -1)
        setAnotationId(entities[index - 1].annotationid);

      if (index > 0 && index < attachmentLength - 1)
        setAnotationId(entities[index + option].annotationid);
    },
    [anotationId],
  );

  const showPreviewSection = (attachments: any) => {
    return (
      <>
        <PreviewSection
          thumbnailsArray={attachments}
          changeImage={changeImage}
          anotationId={anotationId}
        />
        <ThumbnailList
          context={context}
          thumbnailsArray={attachments}
          setPreviewFromThumbnail={setPreviewFromThumbnail}
          anotationId={anotationId}
        />
      </>
    );
  };

  return (
    <Wrapper className='main-container'>
      {getAllAttachements.data && showPreviewSection(getAllAttachements.data)}
      {getAllAttachements.error &&
        showPreviewSection({ entities: GetAttachmentsDemo() })}
    </Wrapper>
  );
};
