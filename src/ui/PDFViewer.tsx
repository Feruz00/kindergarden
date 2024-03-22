import $ from "jquery";
import "turn.js";
import pdfjsLib from "pdfjs-dist";
import Turn from "./Turn";
import { useEffect, useState } from "react";

const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

const options = {
  width: 800,
  height: 600,
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !isTouch,
  // when: {
  //   turned: function (e, page) {
  //     console.log("Current view: ", $(this).turn("view"));
  //   }
  // }
};


interface PDFinterface {
  url: string;
}

const PDFViewer: React.FC<PDFinterface> = ({ url }) => {
  const pages = [url];

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchAndRenderPages = async () => {
      const imageUrls: string[] = [];
      for (const page of pages) {
        const imageData = await fetchPdfPage(page);
        imageUrls.push(imageData);
      }
      setImages(imageUrls);
    };

    fetchAndRenderPages();
  }, []);

  const fetchPdfPage = async (url: string) => {
    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(1); // Fetch the first page of the PDF
    const viewport = page.getViewport({ scale: 1 });
    const canvas = document.createElement("canvas");
    const canvasContext = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext,
      viewport,
    };
    // @ts-ignore
    await page.render(renderContext).promise;
    const imageUrl = canvas.toDataURL("image/jpeg");
    return imageUrl;
  };

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
