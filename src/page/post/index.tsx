import { Link, useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { LoadingPage, PostContainer } from "./styles";

import icon from "../../assets/Icon.svg"
import github from "../../assets/github.svg"
import enterprise from "../../assets/enterprise.svg"
import followers from "../../assets/followers.svg"
import { CaretLeftIcon } from "@phosphor-icons/react";

import { useEffect, useState } from "react";

import { api } from "../../services/axios";

import { formatRelativeDate } from "../../Utils/formatter";

interface Issue {
  body: string
  title: string
  comments: number
  created_at: string
  user: {
    login: string
  }
}

export function Post() {
  const {owner, repo, number } = useParams()

  const [issue, setIssue] = useState<Issue | null>(null)
  
  useEffect(() => {
    async function fetchIssue() {
      const response = await api.get(`repos/${owner}/${repo}/issues/${number}`)
      setIssue(response.data)
    }

    fetchIssue()
  }, [owner, repo, number])
  
  return (
   <PostContainer>
    <Header/>
      {
        issue ? (
          <>
            <section>
            <div className="navigationMenu">
              <span>
                <Link to={'/'}>
                <CaretLeftIcon size={17}/>
                  VOLTAR
                </Link>
              </span>
              <span>
                <a href="https://github.com/AlisonMaciel" target="_blank">
                VER NO GITHUB
                <img src={icon} />
                </a>
              </span>
            </div>
            <div className="title">
              <h2>{issue?.title}</h2>
              <div className="info">
                <span>
                  <img src={github} alt="github" />
                    {issue?.user.login}
                </span>
                <span>
                  <img src={enterprise} alt="empresa" />
                    {formatRelativeDate(issue.created_at)}
                </span>
                <span>
                  <img src={followers} alt="seguidores" />
                    {issue?.comments} Comentários
                </span>
              </div>
            </div>
            </section>
            <main>
              <p>{issue?.body}</p>
            </main>
          </>
        ) : (
          <LoadingPage/>
        )
      }
   </PostContainer>
  )
}