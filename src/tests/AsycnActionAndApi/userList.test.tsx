import { render,screen, waitFor } from "@testing-library/react"
import UserList from './UserList';
import '@testing-library/jest-dom';
import axios from "axios";

jest.mock('axios');

test("should increment click count and handle input change", async ()=>{
  
  const mockUsers = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ];
  
  (axios.get as jest.Mock).mockResolvedValue({data:mockUsers});
  // (axios.get as jest.Mock).mockRejectedValue(new Error("failed request"))
  render(<UserList/>);

  await waitFor(()=>{
    expect(screen.getByText("User 1")).toBeInTheDocument()
    expect(screen.getByText("User 2")).toBeInTheDocument()
    // expect(screen.getByText('An error occurred')).toBeInTheDocument();

  })
  
})
