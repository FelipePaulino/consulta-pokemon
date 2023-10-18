import { render, screen, fireEvent } from '@testing-library/react';
import Select from './index';
import 'jest-styled-components';

describe('Select component', () => {

  test('renders Select component with label and options', () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ];

    render(
      <Select label="Select an option">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    );

    const select = screen.getByTestId('select-wrapper');
    expect(select).toBeInTheDocument();

    const labelElement = screen.getByText('Select an option');
    expect(labelElement).toBeInTheDocument();

    for (const option of options) {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
      expect(optionElement).toHaveAttribute('value', option.value);
    }

    const errorElement = screen.queryByTestId('error-message');
    expect(errorElement).not.toBeInTheDocument();
  });


  test('renders Select component with error message', () => {
    render(
      <Select label="Select an option" error="Please select an option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    );

    const select = screen.getByTestId('select-wrapper');
    expect(select).toBeInTheDocument();

    const labelElement = screen.getByText('Select an option');
    expect(labelElement).toBeInTheDocument();

    const errorElement = screen.getByText('Please select an option');
    expect(errorElement).toBeInTheDocument();
  });

  test('selects an option', () => {
    const { container } = render(
      <Select label="Select an option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    );

    const select = screen.getByTestId('select-wrapper');

    container.firstChild?.addEventListener('change', (event) => {
      const target = event.target as HTMLSelectElement;
      expect(target.value).toBe('option1');
    });
    container.lastChild?.addEventListener('change', (event) => {
      const target = event.target as HTMLSelectElement;
      expect(target.value).toBe('option2');
    });
  });

  test('renders Select component with direction row', () => {
    render(
      <Select label="Select an option" direction="row">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    );

    const select = screen.getByTestId('select-wrapper');
    expect(select).toHaveStyleRule('flex-direction', 'row');
  });

  test('renders Select component with direction column', () => {
    render(
      <Select label="Select an option" direction="column">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    );

    const select = screen.getByTestId('select-wrapper');
    expect(select).toHaveStyleRule('flex-direction', 'column');
  });
});
