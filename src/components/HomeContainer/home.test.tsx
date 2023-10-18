import 'jest-styled-components';
import { screen, render } from '@testing-library/react';
import Home from './index';

describe('Home component', () => {
  it('renders Home', () => {
    render(
      <Home />
    );
    const home = screen.getByTestId('home-component')
    expect(home).toBeInTheDocument();
    expect(home).toHaveStyleRule('background', `url('/images/pokemon-hero.jpg') no-repeat center`);
    expect(home).toMatchSnapshot();
  });
});
