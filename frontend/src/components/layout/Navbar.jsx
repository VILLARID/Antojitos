import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menú' },
  { to: '/promos', label: 'Promos' },
  { to: '/delivery', label: 'Delivery' },
  { to: '/about', label: 'Nosotros' },
  { to: '/contact', label: 'Contacto' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartCount } = useCart()

  const closeMobile = () => {
    setMobileOpen(false)
  }

  return (
    <header>
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
        <Link to="/" className="font-bold" onClick={closeMobile}>
          BRASA REAL
        </Link>

        <nav className="hidden items-center gap-4 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'font-medium text-red-600' : 'text-gray-700 hover:text-gray-900'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative"
            aria-label={`Carrito, ${cartCount} productos`}
          >
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/menu"
            className="hidden rounded bg-red-600 px-4 py-2 text-white md:inline-block"
          >
            Pedir ahora
          </Link>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-gray-200 md:hidden" aria-label="Navegación móvil">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'font-medium text-red-600' : 'text-gray-700'}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="py-2">
              <Link to="/menu" onClick={closeMobile} className="block rounded bg-red-600 px-4 py-2 text-center text-white">
                Pedir ahora
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar
