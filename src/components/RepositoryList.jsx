import { RepositoryItem } from "./RepositoryItem";
import '../styles/global.scss'
import '../styles/repositories.scss'
import { useState, useEffect } from "react";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/gcamposl/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  );
}