import React from 'react';

function DownloadCV() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Make sure cv.pdf is in the public folder
    link.download = 'Samir_Chaudhary_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Download My CV</h2>
      <button onClick={handleDownload} style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Download CV
      </button>
    </div>
  );
}

export default DownloadCV;
