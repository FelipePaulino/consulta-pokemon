import 'jest-styled-components';
import { screen, render } from '@testing-library/react';
import Section from './index';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

describe('Section component', () => {
  mockRouter.push("/initial-path");

  it('renders Section red', () => {
    const { container } = render(
      <Section
        stylepattern='primary'
        subTitle='its a long text'
        title='Hello World!'
      />
    );
    const section = screen.getByTestId('section-component')

    expect(section).toBeInTheDocument();
    expect(container.firstChild).toHaveAttribute('stylepattern', 'primary');
    expect(container.firstChild).toHaveStyleRule('background-color', '#E40F0F');
    expect(container).toMatchSnapshot();
  });

  it('renders Section white', () => {
    const { container } = render(
      <Section
        stylepattern='white'
        subTitle='its a long text'
        title='Hello World!'
      />
    );
    const section = screen.getByTestId('section-component')

    expect(section).toBeInTheDocument();
    expect(container.firstChild).toHaveAttribute('stylepattern', 'white');
    expect(container).toMatchSnapshot();
  });

});
