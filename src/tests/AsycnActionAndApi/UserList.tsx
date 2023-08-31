import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<User[]>('http://localhost:3001/users');
        setUsers(response.data);
      } catch (error) {
        setError('An error occurred');
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {error && <p>{error}</p> }

    </div>
  );
};

export default UserList;
