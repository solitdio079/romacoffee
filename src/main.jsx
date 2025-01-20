import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import HomePage, {action as franchiseAction} from './routes/HomePage'
import Root from './Root'
import AboutPage from './routes/AboutPage'
import ContactUs from './routes/ContactUs'
import ErrorPage from './error-page'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        action: franchiseAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
