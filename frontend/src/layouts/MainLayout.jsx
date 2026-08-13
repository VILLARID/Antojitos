import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const MainLayout = () => {
  const { pathname } = useLocation()
  const hideFooter = pathname === '/'

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}

export default MainLayout