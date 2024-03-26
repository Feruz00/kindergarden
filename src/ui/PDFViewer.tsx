import { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import PageComponent from './PageComponent';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

interface PDFViewerProps {
  pdfUrl: string;
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const flipBookRef = useRef<any>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
   
  };
  useEffect(() => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().on("flip", (e: { data: number }) => {
            setPageNumber(e.data + 1);
            console.log("geldim")
        });
    }
}, [flipBookRef]);

  return (
    <div className='flex items-center justify-center py-10 relative h-screen overflow-hidden'>
      {/* @ts-ignore */}
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} >
          {/* @ts-ignore */}
          <HTMLFlipBook
            width={550}
            height={733}
            
            maxShadowOpacity={0.5}
            mobileScrollSupport={true}
            ref={flipBookRef}
            // className="w-fu"
            startPage={pageNumber}
            // flippingTime={1000}
            usePortrait={false}
            startZIndex={0}
            onFlip={(e: { data: number }) => {
              setPageNumber(e.data + 1);
              // console.log("geldim")
          }}
          >
           {[...Array(numPages)].map((_, index) => (
            <PageComponent key={`page-${index}`} number={index + 1}>
              <Page pageNumber={pageNumber} className="page bg-white" />
            </PageComponent>
          ))} 
          
          </HTMLFlipBook>
            </Document>
        
    </div>
  );
}

export default PDFViewer;
