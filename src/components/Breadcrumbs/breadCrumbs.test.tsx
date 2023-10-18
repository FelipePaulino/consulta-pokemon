import { render, screen } from '@testing-library/react';
import Breadcrumbs from './index';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

describe('Breadcrumbs component', () => {
  test('renders Breadcrumbs component with provided props', () => {

    mockRouter.push("/quem-somos");

    const { container } = render(<Breadcrumbs />);
    expect(container).toMatchSnapshot()

    const breadcrumbsList = screen.getByTestId('breadcrumbs-list');
    expect(breadcrumbsList).toBeInTheDocument();

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const currentLink = screen.getByTestId('breadcrumbs-items')
    expect(currentLink).toHaveTextContent('Quem somos')
  });
});
