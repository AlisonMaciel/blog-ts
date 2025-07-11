import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import { GlobalStyle } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { defaultThemes } from './styles/themes/themes.ts'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultThemes}>
      <GlobalStyle/>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
