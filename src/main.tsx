import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { registerSW } from 'virtual:pwa-register'

// Register service worker
registerSW({
  immediate: true,
  onRegistered(r: ServiceWorkerRegistration | undefined) {
    console.log('Service Worker registered', r)
  },
  onRegisterError(error) {
    console.log('Service Worker registration error', error)
  }
})

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
