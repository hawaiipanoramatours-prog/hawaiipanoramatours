import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'
import App from './App'
import Home from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Services } from './pages/Services'

// ✨ Neu importieren:
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'services', element: <Services /> },

      // ✨ Neu hinzugefügt:
      { path: 'impressum', element: <Impressum /> },
      { path: 'datenschutz', element: <Datenschutz /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
