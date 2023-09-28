import React, { ChangeEvent } from 'react';

type FileUploadProps = {
  onFileUpload: (file: File) => void;
};

function FileUpload({ onFileUpload }: FileUploadProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileChange} />
    </div>
  );
}

export default FileUpload;
