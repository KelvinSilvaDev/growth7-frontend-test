
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FileUpload from '../src/components/FileUpload';


test('FileUpload renders correctly', () => {
  render(<FileUpload onFileUpload={() => {}} />);
  const fileUploadInput = screen.getByLabelText('Upload JSON File');
  expect(fileUploadInput).toBeInTheDocument();
});


test('onFileUpload function is called when a file is selected', () => {
  const onFileUploadMock = jest.fn();
  render(<FileUpload onFileUpload={onFileUploadMock} />);
  const file = new File(['{}'], 'test.json', { type: 'application/json' });
  const fileUploadInput = screen.getByLabelText('Upload JSON File');
  fireEvent.change(fileUploadInput, { target: { files: [file] } });
  expect(onFileUploadMock).toHaveBeenCalledWith(file);
});

test('Displays an error message for invalid file format', async () => {
  render(<FileUpload onFileUpload={() => {}} />);
  const fileUploadInput = screen.getByLabelText('Upload JSON File');
  
  // Simule um arquivo inválido selecionado
  fireEvent.change(fileUploadInput, { target: { files: [{ name: 'invalid.txt', type: 'text/plain' }] } });

  // Aguarde até que a mensagem de erro seja exibida
  await waitFor(() => {
    expect(screen.getByText('Invalid file format. Please select a JSON file.')).toBeInTheDocument();
  });
});



