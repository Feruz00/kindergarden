// DocumentViewer.tsx
import React from 'react';

interface DocumentViewerProps {
  url: string;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ url }) => {
  return (
    <div>
      <embed src={`${process.env.SERVER}/${url}`} type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

export default DocumentViewer;
