import React from 'react';

const PDFViewer: React.FC = () => {
  return (
    <div style={{ height: '80vh', width:"80%"}}>
      <iframe src="/resume-vania.pdf" width="100%" height="100%" />
    </div>
  );
};

export default PDFViewer;

