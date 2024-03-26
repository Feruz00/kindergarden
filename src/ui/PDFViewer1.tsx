import "turn.js";
import { PDFDocument } from 'pdf-lib';
import Turn from "./Turn";
import { useEffect, useState } from "react";
import axios from "axios";

const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

const options = {
  width: 800,
  height: 600,
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !isTouch,
};

interface PDFinterface {
  url: string;
}

const PDFViewer: React.FC<PDFinterface> = ({ url }) => {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // State to track loading
 
  const loadPdf = async () => {
    try {
      const pdfBytes = await fetch(url, {credentials: 'same-origin'}).then(res=>res.arrayBuffer())
      return await PDFDocument.load(pdfBytes);
    } catch (error) {
      console.error('Error loading PDF:', error);
      throw new Error('Failed to load PDF');
    }
  };

  useEffect(() => {
    

    const fetchAndRenderPages = async () => {
      const pdf = await loadPdf();
      const imageUrls: string[] = [];

      for (let i = 0; i < pdf.getPageCount(); i++) {
        const imageUrl = await fetchPdfPage(pdf, i);
        imageUrls.push(imageUrl);
      }

      setImages(imageUrls); // Set the state after fetching images
      setIsLoading(false); // Set loading state to false after loading is complete
    };

    fetchAndRenderPages();
  }, [url]);

  const fetchPdfPage = async (pdf: any, pageNumber: number) => {
    const page = pdf.getPage(pageNumber);
    const imageBytes = await page?.toPng();
    
    if (!imageBytes) {
      throw new Error('Failed to render PDF page as image');
    }
    
    const imageUrl = URL.createObjectURL(new Blob([imageBytes], { type: 'image/png' }));
    return imageUrl;
  };

  if (isLoading) {
    // Render loader while loading
    return (
      <div className="loader">
        Loading...
      </div>
    );
  }

  return (
    <Turn options={options} className="mx-auto">
      {images.map((image, index) => (
        <div key={index} className="page">
          <img src={image} alt="" className="max-w-full h-full" />
        </div>
      ))}
    </Turn>
  );
};

export default PDFViewer;
