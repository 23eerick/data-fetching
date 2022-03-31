import { useEffect, useState } from 'react';

type TRepository = {
  full_name: string;
  description: string;
};

function App() {
  const [repositories, setRepositories] = useState<TRepository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/23eerick/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      });
  }, []);
  return (
    <ul>
      {repositories.map((repo) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default App;