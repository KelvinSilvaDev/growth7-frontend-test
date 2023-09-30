import { render } from '@testing-library/react';
import App from '../../src/App';

test('renders App component', () => {
  const { getByText } = render(<App />);
  
  
  const headingElement = getByText('Divisão de Jobs');
  expect(headingElement).toBeInTheDocument();
  
  
});
