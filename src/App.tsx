import { useFecth } from './Hooks/useFetch';

type Repository = {
  full_name: string;
  description: string;
}

function App() {
  const { data: repositories, isFetching } =
    useFecth<Repository[]>('https://api.github.com/users/23eerick/repos')

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map(repo => {
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


export default App;
