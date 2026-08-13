import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Bike, Menu, ShoppingCart, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import antojitosLogo from '../../assets/common/antojitos-logo.png'
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menú' },
  { to: '/delivery', label: 'Delivery' },
  { to: '/about', label: 'Nosotros' },
  { to: '/contact', label: 'Contacto' },
]

const getNavLinkClasses = ({ isActive }) =>
  `relative text-[15px] font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:bg-red-500 after:transition-opacity after:duration-200 ${
    isActive ? 'text-red-500 after:opacity-100' : 'text-neutral-300 after:opacity-0 hover:text-white'
  }`

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartCount, openCart } = useCart()

  const closeMobileMenu = () => {
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 xl:px-10">
        <Link to="/" onClick={closeMobileMenu} className="flex w-[190px] items-center md:w-[236px]">
          <img
            src={antojitosLogo}
            alt="Antojitos"
            className="h-12 w-full object-contain md:h-[60px]"
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={getNavLinkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <button
            type="button"
            onClick={openCart}
            className="relative flex h-11 w-11 items-center justify-center rounded-lg text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Abrir carrito"
          >
            <ShoppingCart className="h-6 w-6" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          <Link
            to="/delivery"
            className="hidden items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-500 lg:inline-flex"
          >
            Pedir ahora
            <Bike className="h-5 w-5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-neutral-300 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-white/10 bg-[#090909] lg:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.to} className="border-b border-white/10 last:border-b-0">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block py-3 text-[15px] font-medium transition-colors ${
                      isActive ? 'text-red-500' : 'text-neutral-300 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-4">
              <Link
                to="/delivery"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-500"
              >
                Pedir ahora
                <Bike className="h-5 w-5" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar