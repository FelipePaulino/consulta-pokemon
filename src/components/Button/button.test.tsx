
import { render, screen, } from '@testing-library/react';
import 'jest-styled-components';
import Button from './index';

// teste do componente Button
describe('Button component primary style', () => {

  it('renders Button component with primary style', () => {
    render(<Button stylepattern='primary'>test</Button>);
    const button = screen.getByTestId('button-styled-component');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('stylepattern', 'primary');
    expect(button).toHaveStyleRule('background-color', '#E40F0F');
    expect(button).toMatchSnapshot();
  });

  it('renders Button component with secondary style', () => {
    render(<Button stylepattern='secondary' >test</Button>);
    const button = screen.getByTestId('button-styled-component');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('stylepattern', 'secondary');
    expect(button).toHaveStyleRule('background-color', '#FFFFFF');
    expect(button).toMatchSnapshot();
  });
});