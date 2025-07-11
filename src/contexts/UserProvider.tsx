import { useEffect, useState, type ReactNode } from "react";

import { UserContext } from "./UserContext";

import { api } from "../services/axios";

interface UserProviderType {
  children: ReactNode
}

interface User {
  name?: string
  avatar_url?: string
  followers?: number
  bio?: string
  blog?: string
  html_url?: string
  public_repos?: number
  company?: string
}

interface Issue {
  id: number
  number: number
  title: string
  html_url: string
  body: string
  created_at: string
  url: string
}

interface FetchPublicRepos {
  items: Issue[]
}

export function UserProvider({children}: UserProviderType) {
  const userName = import.meta.env.VITE_USER_NAME_GITHUB
  
  const [publicRepos, setePublicRepos] = useState<Issue[]>([])
  const [user, setUser] = useState<User>({})
  
  async function fetchUser() {
    const response = await api.get(`/users/${userName}`)
    setUser(response.data)
  }
  
  async function fetchPublicRepos(query: string = ""): Promise<void> {
    const search = query ? 
    `${query} user:${userName} is:issue` : `user:${userName} is:issue`;
 
    const response = await api.get<FetchPublicRepos>("/search/issues", {
      params: {
        q: search
      }
    })

    setePublicRepos(response.data.items)
  }
  
  useEffect(() => {
    fetchUser()
    fetchPublicRepos()
  },[])
  
  return (
    <UserContext.Provider value={{
      user,
      fetchPublicRepos,
      publicRepos
      }}>
      {children}
    </UserContext.Provider>
  )
}