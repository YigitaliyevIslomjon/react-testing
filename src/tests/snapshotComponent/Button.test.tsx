import { render } from "@testing-library/react"
import Button from './Button';
import '@testing-library/jest-dom';

test('Button component renders correctly', () => {
    const { container } = render(<Button label="Click me" />);
    expect(container).toMatchSnapshot();
  });