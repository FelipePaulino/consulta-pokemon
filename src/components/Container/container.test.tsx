import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from './index';
import 'jest-styled-components';

describe('Container component', () => {
  test('renders Container component with default stylepattern', () => {
    render(<Container stylepattern='white'>Hello, World!</Container>);
    const container = screen.getByTestId('container-styled');
    expect(container).toHaveTextContent('Hello, World!');

    expect(container).toMatchSnapshot();
  });

  test('renders Container component with custom stylepattern', () => {
    render(<Container stylepattern='primary'>Hello World!</Container>);
    const container = screen.getByTestId('container-styled');
    expect(container).toHaveTextContent('Hello World!');
    expect(container).toHaveStyleRule('background-color', '#E40F0F');
    expect(container).toMatchSnapshot();
  });
});
