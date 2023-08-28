import { render, screen } from "@testing-library/react"
import Button from './Button';
import '@testing-library/jest-dom';

test("should render component correctly",()=>{
    render(<Button label="click me"/>)
    const elementButton = screen.getByText("click me")
    expect(elementButton).toBeInTheDocument()
})