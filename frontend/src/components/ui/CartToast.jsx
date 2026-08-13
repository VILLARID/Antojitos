import { useEffect, useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const TOAST_DURATION = 1800

const ToastContent = ({ message }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 20)
    const hideTimer = window.setTimeout(() => setVisible(false), TOAST_DURATION)
    return () => {
      window.clearTimeout(timer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  const mounted = Boolean(message)

  return (
    <div
      className={`pointer-events-none fixed z-[60] flex items-start gap-3 rounded-xl border border-white/10 bg-[#151515] px-4 py-3 shadow-xl shadow-black/30 transition-all duration-300 ${
        mounted && visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      } bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 sm:w-[320px]`}
      role="status"
      aria-live="polite"
      aria-hidden={!(mounted && visible)}
    >
      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-white">{message?.product.name}</p>
        <p className="text-xs text-neutral-400">Agregado al carrito</p>
      </div>
    </div>
  )
}

const CartToast = () => {
  const { lastAdded } = useCart()
  if (!lastAdded) return null
  return <ToastContent key={lastAdded.key} message={lastAdded} />
}

export default CartToast