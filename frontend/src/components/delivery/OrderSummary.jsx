import { AnimatePresence, motion } from 'framer-motion'
import { Bike, Clock3, Minus, PackageCheck, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { formatPrice } from '../../data/menuData'

const infoRows = [
  { icon: Clock3, text: 'Tiempo estimado', sub: '30–45 min' },
  { icon: Bike, text: 'Envíos en', sub: 'Lima Metropolitana' },
  { icon: PackageCheck, text: 'Empaque seguro', sub: 'Tu pedido llega caliente' },
]

const OrderSummary = ({
  items,
  updateQuantity,
  removeFromCart,
  subtotal,
  deliveryFee,
  total,
}) => {
  return (
    <div className="rounded-xl border border-white/10 bg-[#101010] p-6 lg:p-8">
      <h2 className="mb-5 flex items-center gap-2 text-lg font-bold uppercase tracking-wide text-white">
        <ShoppingBag className="h-5 w-5 text-red-500" aria-hidden="true" />
        Tu pedido
      </h2>

      <ul className="divide-y divide-white/5">
        <AnimatePresence initial={false}>
          {items.map((item) => (
            <motion.li
              key={item.id}
              layout
              className="grid grid-cols-[auto_1fr_auto] gap-4 py-4 sm:grid-cols-[auto_1fr_auto]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#0b0b0b]">
                {item.image ? (
                  <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                ) : null}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">{item.name}</p>
                {item.description && (
                  <p className="mt-0.5 line-clamp-2 text-xs text-neutral-400">{item.description}</p>
                )}
                <div className="mt-2.5 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label={`Reducir cantidad de ${item.name}`}
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-white/15 text-white transition-colors hover:border-white/30"
                  >
                    <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  <motion.span
                    key={item.quantity}
                    className="w-6 text-center text-sm font-semibold text-white"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    {item.quantity}
                  </motion.span>
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
              <div className="flex flex-col items-end justify-between">
                <motion.span
                  key={`${item.id}-${item.quantity}`}
                  className="text-sm font-bold text-white"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {formatPrice(item.price * item.quantity)}
                </motion.span>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Eliminar ${item.name} del pedido`}
                  className="transition-colors hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4 text-neutral-500 hover:text-red-500" aria-hidden="true" />
                </button>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-400">Subtotal</span>
          <motion.span
            key={subtotal}
            className="font-semibold text-white"
            initial={{ opacity: 0, y: -3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            {formatPrice(subtotal)}
          </motion.span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-400">Delivery</span>
          <span className="font-semibold text-white">{formatPrice(deliveryFee)}</span>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <span className="text-base font-semibold uppercase tracking-wide text-white">Total</span>
          <motion.span
            key={total}
            className="text-2xl font-bold text-red-500"
            initial={{ scale: 1.1, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {formatPrice(total)}
          </motion.span>
        </div>
      </div>

      <motion.button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-500"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        Confirmar pedido
      </motion.button>

      <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
        {infoRows.map(({ icon: Icon, text, sub }) => (
          <li key={text} className="flex items-center gap-3">
            <Icon className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
            <p className="text-xs text-neutral-400">
              {text} <span className="font-medium text-neutral-200">· {sub}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrderSummary