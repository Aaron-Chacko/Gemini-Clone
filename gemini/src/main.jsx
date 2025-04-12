import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import contextprovider from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <contextprovider>
    <App />
  </contextprovider>,
)
