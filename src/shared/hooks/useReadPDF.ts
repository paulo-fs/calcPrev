import { useState } from 'react';
import { readPDF } from '../utils/readPDF';
import { PrevExtractData } from '../types';

export function useReadPDF() {
  const [pdfContent, setPdfContent] = useState<PrevExtractData[] | undefined>();

  function extractData(value: string): PrevExtractData[] {
    const regex = /(\d{2}\/\d{4})\s*\n\s*(\d+,\d{2})\s*\n\s*(\w+-\w+)?/g;
    let match;
    const data = [];

    while ((match = regex.exec(value)) !== null) {
      data.push({
        competencia: match[1],
        remuneracao: match[2],
        indicador: match[3] || '',
      });
    }

    return data;
  }

  function getPdfData(value: string) {
    const data = extractData(value);
    setPdfContent(data);
  }

  function handleFileInput(event: React.ChangeEvent<HTMLInputElement>) {
    readPDF(event, getPdfData);
  }

  return {
    handleFileInput,
    pdfContent,
  };
}
