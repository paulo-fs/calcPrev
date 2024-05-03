import * as pdfjsLib from 'pdfjs-dist';

import { TextItem } from 'pdfjs-dist/types/src/display/api';

const pdfJS = pdfjsLib;
pdfJS.GlobalWorkerOptions.workerSrc =
  window.location.origin + '/pdf.worker.min.mjs';

export async function readPDF(
  event: React.ChangeEvent<HTMLInputElement>,
  fn: (value: string) => void,
) {
  const file = event.target.files?.[0];
  const reader = new FileReader();
  reader.onload = async (event) => {
    const arrayBuffer = event.target?.result;
    if (arrayBuffer) {
      const content = await parsePDF(arrayBuffer);
      fn(content);
    }
  };

  if (file) reader.readAsArrayBuffer(file);
}

async function parsePDF(doc: string | ArrayBuffer) {
  return await pdfJS.getDocument(doc).promise.then((pdf) => {
    const totalPages = pdf.numPages;
    const pagePromises = [];
    for (let i = 1; i <= totalPages; i++) {
      pagePromises.push(
        pdf.getPage(i).then((page) => {
          return page.getTextContent().then((textContent) => {
            return textContent.items
              .map((item) => {
                const text = item as TextItem;
                return text.str;
              })
              .join('\n');
          });
        }),
      );
    }

    return Promise.all(pagePromises).then((pages) => {
      const fullText = pages.join(' ');
      return fullText;
    });
  });
}
