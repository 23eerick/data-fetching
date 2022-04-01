import { useEffect, useState } from 'react';
import axios from 'axios';

type Repository = {
  full_name: string;
  description: string;
}

export function App() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/23eerick/repos')
      .then(response => {
        setRepositories(response.data);
      })
  }, [])

  return (
    <ul>
      {repositories.map(repo => {
        return (
          <li key={repo.full_name}>
            <h1>{repo.full_name}</h1>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )

}