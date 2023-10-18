import 'jest-styled-components';
import { screen, render } from '@testing-library/react';
import Footer from './index';

describe('Footer component', () => {
  it('renders Footer', () => {
    render(
      <Footer />
    );
    const footer = screen.getByTestId('footer-component')
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveStyleRule('background-color', '#1D1D1D');
    expect(footer).toHaveStyleRule('text-align', 'center');
    expect(footer).toMatchSnapshot();
  });
});
