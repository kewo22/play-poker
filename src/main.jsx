import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

// Register service worker
registerSW({ 
  immediate: true,
  onRegistered(r) {
    console.log('Service Worker registered')
  },
  onRegisterError(error) {
    console.log('Service Worker registration error', error)
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
