import { AnimatePresence } from 'framer-motion'
import { useLocation, useOutlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import CartDrawer from '../components/cart/CartDrawer'
import CartToast from '../components/ui/CartToast'
import PageTransition from '../components/ui/PageTransition'
import ScrollToTop from '../components/ui/ScrollToTop'

const MainLayout = () => {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname} className="flex flex-1 flex-col">
            {outlet}
          </PageTransition>
        </AnimatePresence>
      </main>
      <CartDrawer />
      <CartToast />
    </div>
  )
}

export default MainLayout