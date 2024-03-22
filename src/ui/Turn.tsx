import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "turn.js";

interface TurnProps {
  style?: React.CSSProperties;
  className?: string;
  options?: any;
  children:React.ReactNode
}

const Turn: React.FC<TurnProps> = ({
  style = {},
  className = "",
  options = {},
  children
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (elRef.current && event.keyCode === 37) {
        const $el = $(elRef.current) as any;
        $el.turn("previous");
      }
      if (elRef.current && event.keyCode === 39) {
        const $el = $(elRef.current) as any;
        $el.turn("next");
      }
    };
  
    if (elRef.current) {
      const $el = $(elRef.current) as any;
      $el.turn({ ...options });
      document.addEventListener("keydown", handleKeyDown, false);
    }
  
    return () => {
      if (elRef.current) {
        const $el = $(elRef.current) as any;
        $el.turn("destroy")
          .remove();
      }
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [options]);

  return (
    <div className={className} style={style} ref={elRef}>
      {children}
    </div>
  );
};

export default Turn

// const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// const options = {
//   width: 800,
//   height: 600,
//   autoCenter: true,
//   display: "double",
//   acceleration: true,
//   elevation: 50,
//   gradients: !isTouch,
//   // when: {
//   //   turned: function (e, page) {
//   //     console.log("Current view: ", $(this).turn("view"));
//   //   }
//   // }
// };

// interface PDFinterface{
//   url: string
// }

// const PDFViewer: React.FC<PDFinterface> = ({url}) => {
//   const pages = [
//     url
//   ];

//   const [images, setImages] = React.useState<string[]>([]);

//   useEffect(() => {
//     const fetchAndRenderPages = async () => {
//       const imageUrls: string[] = [];
//       for (const page of pages) {
//         const imageData = await fetchPdfPage(page);
//         imageUrls.push(imageData);
//       }
//       setImages(imageUrls);
//     };

//     fetchAndRenderPages();
//   }, []);

//   const fetchPdfPage = async (url: string) => {
//     const loadingTask = pdfjsLib.getDocument(url);
//     const pdf = await loadingTask.promise;
//     const page = await pdf.getPage(1); // Fetch the first page of the PDF
//     const viewport = page.getViewport({ scale: 1 });
//     const canvas = document.createElement("canvas");
//     const canvasContext = canvas.getContext("2d");
//     canvas.height = viewport.height;
//     canvas.width = viewport.width;

//     const renderContext = {
//       canvasContext,
//       viewport
//     };
//     // @ts-ignore
//     await page.render(renderContext).promise;
//     const imageUrl = canvas.toDataURL("image/jpeg");
//     return imageUrl;
//   };

//   return (
//     <Turn options={options} className="mx-auto">
//       {images.map((image, index) => (
//         <div key={index} className="page">
//           <img src={image} alt="" className="max-w-full h-full" />
//         </div>
//       ))}
//     </Turn>
//   );
// };