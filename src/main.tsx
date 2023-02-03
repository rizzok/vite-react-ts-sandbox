import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import ErrorPage from './components/ErrorPage'
import Header from './components/Header'
import Contact from './routes/Contacts'
import { Global } from '@emotion/react'
import { globalStyles } from './assets/styles/GlobalStyles'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Header />
    <main>
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
)
