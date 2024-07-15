import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CreateTripPage } from "./pages/create-trip/create-trip";


const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />
  },
])

export function App() {
  return <RouterProvider router={router} />
}