import { fireEvent, render,screen } from "@testing-library/react"
import EventHandlingComponent from './EventHandlingComponent';
import '@testing-library/jest-dom';

test("should increment click count and handle input change", ()=>{
  render(<EventHandlingComponent/>)
  const buttonElement=screen.getByText('Click me')
  const inputElement=screen.getByRole('textbox')
  const inputValue = "123"

  expect(screen.getByText("Click Count: 0")).toBeInTheDocument()
  
  fireEvent.click(buttonElement)
  expect(screen.getByText("Click Count: 1")).toBeInTheDocument()
  
  fireEvent.change(inputElement, { target: { value: inputValue } });
  expect(inputElement).toHaveValue(inputValue);
  expect(screen.getByText(`Input Value: ${inputValue}`)).toBeInTheDocument();


})
