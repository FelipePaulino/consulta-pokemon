import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './index';

describe('Input component', () => {
  test('renders Input component with label and no error', () => {
    const { container } = render(<Input label="Username" id="username" />);

    const inputComponent = screen.getByTestId('input-styled-component');
    expect(inputComponent).toBeInTheDocument();

    expect(container.firstChild).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox', { name: 'Username' });
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', 'username');

    const errorElement = screen.queryByTestId('error-message');
    expect(errorElement).not.toBeInTheDocument();
    expect(inputComponent).toMatchSnapshot();
  });

  test('renders Input component with error', () => {
    const { container } = render(<Input label="Email" id="email" error="Invalid email address" />);

    const inputComponent = screen.getByTestId('input-styled-component');
    expect(inputComponent).toBeInTheDocument();

    expect(container.firstChild).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox', { name: 'Email' });
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', 'email');


    const errorElement = screen.getByTestId('error-message');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent('Invalid email address');

    expect(inputComponent).toMatchSnapshot();
  });
});
