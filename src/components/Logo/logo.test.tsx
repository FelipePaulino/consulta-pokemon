// write logo render tests here
import { render, screen } from '@testing-library/react';
import Logo from './index';
import { LogoProvider } from '../../context/LogoContext/logoProvider';
import 'jest-styled-components';

describe('Logo component', () => {
  test('renders Logo component with showLogo as true', () => {
    const { container } = render(
      <LogoProvider>
        <Logo />
      </LogoProvider>
    );
    const logo = screen.getByTestId('logo-container');
    logo.setAttribute('showtext', 'true')
    expect(logo).toBeInTheDocument();
    const logoText = screen.getByText('Centro Pokémon');
    expect(logoText).toBeInTheDocument();
    expect(logoText).toHaveStyleRule('opacity', '1')

    expect(logo).toMatchSnapshot()
  });

  test('renders Logo component with showLogo as false', () => {
    const { container } = render(
      <LogoProvider>
        <Logo />
      </LogoProvider>
    );
    const logo = screen.getByTestId('logo-container');
    const logoText = screen.getByTestId('logo-text');

    setTimeout(() => {
      expect(logoText).toHaveStyleRule('opacity', '0');
      expect(container).toMatchSnapshot();
      done();
    }, 5000);
  });

});

function done() {
  throw new Error('Function not implemented.');
}
