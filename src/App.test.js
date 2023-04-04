import { render, screen } from '@testing-library/react';
import { TitlesList } from './components/TitlesList'

test('renders Documents component', () => {
  render(<TitlesList />);
  const linkElement = screen.getByText(/Wiki Docs/i);
  expect(linkElement).toBeInTheDocument();
});
