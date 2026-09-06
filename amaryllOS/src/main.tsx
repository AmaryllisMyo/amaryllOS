import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import i18n from './i18n.ts'
import './index.css'
import './styles/tokens.css'
import App from './App.tsx'
import { LocaleProvider } from './locales/LocaleContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </StrictMode>,
)
