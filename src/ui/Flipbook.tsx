import { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page } from 'react-pdf';

interface PDFViewerProps {
    pdfUrl: string;
}

  
const Flipbook:React.FC<PDFViewerProps> = ({pdfUrl}) => {
    const [numPages, setNumPages] = useState<null|number>(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: {numPages:number}) {
      setNumPages(numPages);
    }
    function pagesList(){
      var pages = [];
      for(var i=1; i<=(numPages as number); i++){
        pages.push(<div><Page width={500} pageNumber={i}/></div>);
      }
      return pages;
    }

    return (
        <Document
        file="pdfUrl"
        onLoadSuccess={onDocumentLoadSuccess}
        className='modal-90w'
        >   
             
        <HTMLFlipBook width={500} height={707}>
            {pagesList()}
        </HTMLFlipBook>
        </Document>

    );
}
export default Flipbook;