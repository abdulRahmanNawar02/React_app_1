
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from './components/MasterLayout/MasterLayout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Experiance from './components/Experience/Experiance'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'

import './App.css'

function App() {
  const routes = createBrowserRouter([{
    path: "/",
    element: <MasterLayout />,
    children: [
      {index: true , element:<Home/>},
      {path: "home" , element:<Home />},
      {path: "about" , element:<About />},
      {path: "Experiance" , element:<Experiance/>},
      {path: "skills" , element:<Skills/>},
      {path: "work" , element:<Work/>}
    ]
  }])
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
