import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import HomePage from './routes/HomePage'
import Root from './Root'
import AboutPage from './routes/AboutPage'
import ContactUs from './routes/ContactUs'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [{
      index: true,
      element: <HomePage/>
    }, {
      path: "/about",
      element: <AboutPage/>
      }, {
      path: "/contact",
      element: <ContactUs/>
    }]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
