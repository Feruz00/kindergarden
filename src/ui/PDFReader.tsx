
import React, { useCallback, useEffect, useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import HTMLFlipBook from 'react-pageflip';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
interface PDFViewerProps {
    pdfUrl: string;
  }
const PDFReader:React.FC<PDFViewerProps> = ({pdfUrl}) => {
    const [numPages, setNumPages] = useState<null|number>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageScale, setPageScale] = useState(0.90);

    const onDocumentLoadSuccess = ({ numPages }: {numPages:number}) => {
        setNumPages(numPages);
    }

    // const handlePrev = () => {
    //     if (pageNumber > 1) {
    //         setPageNumber(pageNumber => pageNumber - 1);
    //     }
    // }

    // const handleNext = () => {
    //     if (pageNumber < (numPages as number)) {
    //         setPageNumber(pageNumber => pageNumber + 1);
    //     }
    // }

    // const handleZoomOut = () => {
    //     //membatasi zoom
    //     if (pageScale > 0.75) {
    //         setPageScale(pageScale => pageScale - 0.1);
    //     }
    // }
    const pagesList = useCallback(() => {
        var pages = [];
        for (var i = 1; i <= (numPages as number); i++) {
            pages.push(<div key={i}><Page renderAnnotationLayer={false} renderTextLayer={false} width={500} pageNumber={i} className='flex justify-center bg-slate-500 md:drop-shadow-xl md:border-4 md:border-white' /></div>);
        }
        return pages;
    }, [numPages]);
    // function pagesList(){
    //     var pages = [];
    //     for(var i=1; i<=(numPages as number); i++){
    //       pages.push(<div><Page width={500} pageNumber={i}/></div>);
    //     }
    //     return pages;
    //   }
    // const handleZoomIn = () => {
    //     //membatasi zoom
    //     if (pageScale < 2.0) {
    //         setPageScale(pageScale => pageScale + 0.1);
    //     }
    // }
    
    return (
        <div className="w-screen flex flex-col items-center overflow-x-hidden">
            <div className='mt-3 md:mt-5 flex flex-col justify-evenly gap-3 h-full'>
                <div className='w-screen h-full flex justify-center'>
                    <Document className='w-full md:w-max flex justify-center items-center'  file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                        {/* @ts-ignore */}
                    <HTMLFlipBook width={500} height={707} className='flex justify-center items-center' >
                        {pagesList()}
                    </HTMLFlipBook>
                        {/* <Page renderAnnotationLayer={false} renderTextLayer={false} pageNumber={pageNumber} scale={pageScale} width={320} className='flex justify-center bg-slate-500 md:drop-shadow-xl md:border-4 md:border-white' /> */}
                        {/* <span onClick={handlePrev} className={`${pageNumber <= 1 ? 'cursor-default': 'cursor-pointer'} fixed bg-slate-0 top-0 left-0 w-1/3 md:w-1/2 h-full select-none`}></span> */}
                        {/* <span onClick={handleNext} className={`${pageNumber < (numPages as number) ? 'cursor-pointer' : 'cursor-default'} fixed bg-slate-0 top-0 right-0 w-1/3 md:w-1/2 h-full select-none`}></span> */}
                    </Document>
                </div>
                {/* <div className='bottom-0 self-center flex flex-row justify-between md:justify-around items-center mb-5 mt-3 z-50 w-1/2 md:w-fit gap-0 md:gap-5 bg-slate-200 py-3 px-4 rounded-full drop-shadow-xl'>
                    <span onClick={handlePrev} className={`${pageNumber <= 1 ? 'cursor-default': 'cursor-pointer'} bg-slate-600 select-none p-2 rounded-full`}><BsChevronLeft className='text-white text-2xl'/></span>
                    <span onClick={handleZoomOut} className={`${pageNumber <= 1 ? 'cursor-default': 'cursor-pointer'} bg-slate-600 select-none p-2 rounded-full`}><AiOutlineZoomOut className='text-white text-2xl' /></span>
                    <span className='mx-3 text-center text-sm md:text-base'>Page {pageNumber} of {numPages}</span>
                    <span onClick={handleZoomIn} className={`${pageNumber < (numPages as number) ? 'cursor-pointer' : 'cursor-default'} bg-slate-600 select-none p-2 rounded-full`}><AiOutlineZoomIn className='text-white text-2xl'/></span>
                    <span onClick={handleNext} className={`${pageNumber < (numPages as number) ? 'cursor-pointer' : 'cursor-default'} bg-slate-600 select-none p-2 rounded-full`}><BsChevronRight className='text-white text-2xl'/></span>
                </div> */}
            </div>
        </div>
    )
}

export default PDFReader