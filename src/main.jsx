import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import HomePage from './routes/HomePage'
import Root from './Root'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [{
      index: true,
      element: <HomePage/>
    }]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
