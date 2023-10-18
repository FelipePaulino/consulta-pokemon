import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';
import { LogoProvider } from '../../context/LogoContext/logoProvider';

describe('Header component', () => {
  test('renders Header component with logo and navigation links', () => {
    const { container } = render(
      <LogoProvider>
        <Header />
      </LogoProvider>
    );
    const logo = screen.getByTestId('logo-container');
    expect(logo).toBeInTheDocument();
    const quemSomosLink = screen.getByText('Quem Somos');
    const agendarConsultaButton = screen.getByText('Agendar Consulta');
    expect(quemSomosLink).toBeInTheDocument();
    expect(agendarConsultaButton).toBeInTheDocument();
  });
});
