import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <StrictMode>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode >,
)
