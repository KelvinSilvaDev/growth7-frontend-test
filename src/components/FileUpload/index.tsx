import { ChangeEvent, useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import * as Styled from './styles';
import { Typography } from '@mui/material';

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
    <Styled.StyledContainer>
      <Styled.StyledPaper elevation={3}>
        <Styled.StyledLabel htmlFor="file">
          <Typography variant="h6" component="div">
            Upload JSON File
          </Typography>
          <Styled.StyledButton
            variant="contained"
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            Choose File
          </Styled.StyledButton>
        </Styled.StyledLabel>
        <input
          type="file"
          id="file"
          accept=".json"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
      </Styled.StyledPaper>
    </Styled.StyledContainer>
  );
}

export default FileUpload;
