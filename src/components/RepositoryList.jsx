import { RepositoryItem } from "./RepositoryItem";
import '../styles/global.scss'
import '../styles/repositories.scss'
import { useState, useEffect } from "react";


const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

// useEffect(() =>{

// },[repositories]); -> Primeiro parametro: Funçao que executa, quado o segundo,
//parametro mudar! Caso o segundo parametro seja vazio, executa apenas uma vez e se 
// não houver um segundo parametro, o useEffect entra em loop!

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
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}