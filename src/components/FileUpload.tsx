import React, { ChangeEvent, useState } from 'react';

type FileUploadProps = {
  onFileUpload: (file: File) => void;
};

function FileUpload({ onFileUpload }: FileUploadProps) {
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/json') {
        setError('Invalid file format. Please select a JSON file.');
      } else {
        setError(null);
        onFileUpload(file);
      }
    }
  };

  return (
    <div>
      <label htmlFor="file">
        Upload JSON File
      </label>
      <input type="file" id='file' accept=".json" onChange={handleFileChange} />
      {error && <p>{error}</p>}
    </div>
  );
}

export default FileUpload;
