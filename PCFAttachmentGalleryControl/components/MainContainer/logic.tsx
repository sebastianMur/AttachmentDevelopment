import { img1, img2 } from '../../testbase64/demoImages';
import { pdf2 } from '../../testbase64/demoPdf2';

interface Attachment {
  documentbody: string;
  mimetype: string;
  title: string;
  notetext: string;
  annotationid: string;
  filename: string;
}

export const GetAttachmentsDemo = (): Attachment[] => {
  const notes = [];

  for (let index = 0; index < 10; index++) {
    let item: Attachment = {
      annotationid: index.toString(),
      mimetype: 'image/jpeg',
      notetext: 'Text for image number: ' + index.toString(),
      title: 'Title ' + index.toString(),
      filename: 'img' + index.toString() + '.jpeg',
      documentbody: index % 2 ? img1 : img2,
    };
    notes.push(item);
  }

  let pdfItem: Attachment = {
    annotationid: '10',
    mimetype: 'application/pdf',
    notetext: 'Text for image number: ' + '10',
    title: 'Title ' + '10',
    filename: 'pdf_10.pdf',
    documentbody: `JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G`,
  };

  let pdfItem2: Attachment = {
    annotationid: '11',
    mimetype: 'application/pdf',
    notetext: 'Text for image number: ' + '11',
    title: 'Title ' + '11',
    filename: 'pdf_11.pdf',
    documentbody: pdf2,
  };
  notes.push(pdfItem);
  notes.push(pdfItem2);

  return notes;
};
