import { RouterProvider } from 'react-router-dom'
import router from './routes/AppRoutes'

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
