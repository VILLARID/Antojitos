import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import CartDrawer from '../components/cart/CartDrawer'
import CartToast from '../components/ui/CartToast'

const MainLayout = () => {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <CartDrawer />
      <CartToast />
    </div>
  )
}

export default MainLayout