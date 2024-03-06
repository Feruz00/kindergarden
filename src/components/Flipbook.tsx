import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from '../assets/30-days-of-react-ebook-fullstackio.pdf'
interface Props{
    pdfUrl:string
}

const Flipbook:React.FC<Props> = ({pdfUrl}) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    console.log(numPages)
  }

  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} onLoadError={(e)=>{console.log(e)}}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Flipbook