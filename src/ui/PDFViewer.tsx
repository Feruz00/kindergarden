import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdfjs from 'pdfjs-dist';

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const FlipbookViewer: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    // Load PDF information
    const loadingTask = pdfjs.getDocument(pdfUrl);
    loadingTask.promise.then(pdf => {
      setNumPages(pdf.numPages);
    });
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  const prevPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber - 1);
  };

  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <button onClick={prevPage} disabled={pageNumber <= 1}>Previous</button>
        <button onClick={nextPage} disabled={pageNumber >= (numPages || 1)}>Next</button>
      </div>
    </div>
  );
};

export default FlipbookViewer;
