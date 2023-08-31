import { fireEvent, render,screen } from "@testing-library/react"
import Counter from './Counter';
import '@testing-library/jest-dom';

test('increments and decrements the count', () => {
    render(<Counter/>)
    const countElement = screen.getByText("Count: 0"); 
    const incrementElement = screen.getByText("Increment"); 
    const decrementElement = screen.getByText("Decrement");

    expect(countElement).toHaveTextContent('Count: 0');

    fireEvent.click(incrementElement)
    expect(countElement).toHaveTextContent("Count: 1")

    fireEvent.click(decrementElement)
    expect(countElement).toHaveTextContent("Count: 0")

    // expect(countElement.textContent).toBe('Count: 0');
    // fireEvent.click(incrementElement)
    // expect(countElement.textContent).toBe("Count: 1")
    // fireEvent.click(decrementElement)
    // expect(countElement.textContent).toBe("Count: 0")

  });
