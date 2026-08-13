import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Promos from '../pages/Promos'
import Delivery from '../pages/Delivery'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'promos', element: <Promos /> },
      { path: 'delivery', element: <Delivery /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cart', element: <Cart /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default AppRouter
