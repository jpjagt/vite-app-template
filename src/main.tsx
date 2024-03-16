import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyles from '@/components/GlobalStyles'
import { ThemeProvider } from '@/components/ThemeProvider'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
