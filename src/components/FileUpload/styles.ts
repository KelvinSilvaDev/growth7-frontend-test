
import { Button,  Container, Paper } from '@mui/material';

import styled from 'styled-components';


export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const StyledPaper = styled(Paper)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
`;

export const StyledLabel = styled.label`
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;
