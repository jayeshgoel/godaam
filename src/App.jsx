
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/ui/Home"
import Signup from "./components/ui/Signup"
import Login from "./components/ui/Login"
import Dashboard from "./components/ui/Dashboard"
import Order from "./components/ui/Order"
import Stats from "./components/ui/Stats"

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'orders',
        element: <Order />,  // This will render Order component
      },
      {
        path: 'stats',
        element: <Stats />,  // This will render Order component
      },
      // Add other nested routes here
    ]
  },
])


function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
