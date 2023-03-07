import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthContext, firebaseAuth } from './firebase/firebaseApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContext.Provider value={firebaseAuth}>
      <App />
    </AuthContext.Provider>
  </React.StrictMode>,
)
