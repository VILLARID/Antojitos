import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../data/menuData'

const CartDrawer = () => {
  const {
    isCartOpen,
    closeCart,
    cartItems,
    updateQuantity,
    removeFromCart,
    cartTotal,
  } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isCartOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isCartOpen])

  const handleGoToCart = () => {
    closeCart()
    navigate('/cart')
  }

  const handleGoToMenu = () => {
    closeCart()
    navigate('/menu')
  }

  return (
    <div className={`fixed inset-0 z-[70] ${isCartOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={`absolute right-0 top-0 flex h-dvh w-[90vw] max-w-[420px] flex-col border-l border-white/10 bg-[#0d0d0d] transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compras"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h2 className="flex items-center gap-2 text-lg font-bold uppercase tracking-wide text-white">
            <ShoppingBag className="h-5 w-5 text-red-500" aria-hidden="true" />
            Tu carrito
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-12 w-12 text-white/10" aria-hidden="true" />
            <div>
              <p className="text-base font-semibold text-white">Tu carrito está vacío</p>
              <p className="mt-1 text-sm text-neutral-400">
                Explora nuestro menú y encuentra tu próximo antojo.
              </p>
            </div>
            <button
              type="button"
              onClick={handleGoToMenu}
              className="mt-2 rounded-lg bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-500"
            >
              Ver menú
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-white/5 overflow-y-auto px-5">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center gap-4 py-4">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">{item.name}</p>
                    <p className="mt-0.5 text-xs text-neutral-400">{formatPrice(item.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label={`Reducir cantidad de ${item.name}`}
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-white/15 text-white transition-colors hover:border-white/30"
                      >
                        <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold text-white">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label={`Aumentar cantidad de ${item.name}`}
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-white/15 text-white transition-colors hover:border-white/30"
                      >
                        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-sm font-bold text-white">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Eliminar ${item.name} del carrito`}
                      className="flex items-center gap-1 text-xs text-neutral-500 transition-colors hover:text-red-500"
                    >
                      <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                      Quitar
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 px-5 py-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm uppercase tracking-wide text-neutral-400">Total</span>
                <span className="text-xl font-bold text-white">{formatPrice(cartTotal)}</span>
              </div>
              <button
                type="button"
                onClick={handleGoToCart}
                className="w-full rounded-lg bg-red-600 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-500"
              >
                Ver carrito
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer