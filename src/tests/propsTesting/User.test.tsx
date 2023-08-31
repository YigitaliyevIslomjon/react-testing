import { render,screen } from "@testing-library/react"
import User from './User';
import '@testing-library/jest-dom';

test('User component displays correct aga and name', () => {
    render(<User age={123} name="Islomjon"/>)
    const elementH2 = screen.getByText("Islomjon");
    const elementP = screen.getByText('Age: 123')
    expect(elementH2).toBeInTheDocument()
    expect(elementP).toBeInTheDocument()

  });

  test('User component displays correct aga and name with different props', () => {
    render(<User age={124} name="Bekzod"/>)
    const elementH2 = screen.getByText("Bekzod");
    const elementP = screen.getByText('Age: 124');
    expect(elementH2).toBeInTheDocument()
    expect(elementP).toBeInTheDocument()

  });