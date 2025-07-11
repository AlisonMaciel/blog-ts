import { createContext } from "use-context-selector";

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

interface UserContextProps {
  user: User
  publicRepos: Issue[]
  fetchPublicRepos: (query?: string) => Promise<void>
}

export const UserContext = createContext({} as UserContextProps)