import { Header } from "../../components/Header";

import { useState } from "react";

import { BlogContainer, SearchForm, SectionArticle } from "./styles";

import icon from "../../assets/Icon.svg"
import enterprise from "../../assets/enterprise.svg"
import followers from "../../assets/followers.svg"
import github from "../../assets/github.svg"

import { useContextSelector } from "use-context-selector";
import { UserContext } from "../../contexts/UserContext";

import { Link } from "react-router-dom";

import { formatRelativeDate } from "../../Utils/formatter";

export function Blog() {
  const [search, setSearch] = useState("")
  
  const user = useContextSelector(UserContext, (ctx) => {
    return ctx.user
  })

  const repos = useContextSelector(UserContext, (ctx) => {
    return ctx.publicRepos
  })

  const fetchPublicRepos = useContextSelector(UserContext, (ctx) => {
    return ctx.fetchPublicRepos
  })

  async function handleFetchIssue(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await fetchPublicRepos(search)
  }
  console.log(search)
  return (
      <BlogContainer>
        <Header />
        <section>
          <img src={user.avatar_url} alt="user" />
          <div className="blog">
            <div className="findOutMore">
              <h1>{user.name}</h1>
              <div className="separetor">
                <a href={user.html_url} target="_blank">
                  GITHUB
                  <img src={icon} />
                </a>
              </div>
            </div>
            <p>{user.bio}</p>
            <div className="info">
              <span>
                <img src={github} alt="github" />
                {user.name}
              </span>
              <span>
                <img src={enterprise} alt="empresa" />
                {user.company}
              </span>
              <span>
                <img src={followers} alt="seguidores" />
                {user.followers} Seguidores
              </span>
            </div>
          </div>
        </section>
        <SearchForm onSubmit={handleFetchIssue}>
          <div>
            <strong>
              Publicações
            </strong>
            <span>
              {user.public_repos} publicações
            </span>
          </div>
          <div>
          <input 
            type="text" 
            placeholder="Buscar conteúdo"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">
            Enviar
          </button>
          </div>
        </SearchForm>
        <SectionArticle>
          {
            repos.map(repositories => (
              <article key={repositories.id} >
              <Link to={`/post/${repositories.url.replace("https://api.github.com/repos/", "")}`}>
                <div className="separetor">
                <strong>{repositories.title}</strong>
                <span>{formatRelativeDate(repositories.created_at)}</span>
                </div>
                <p>{repositories.body}</p>
              </Link>
              </article>
            ))
          } 
        </SectionArticle>
      </BlogContainer>
  )
}