import { useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock3, MapPin } from 'lucide-react'
import { staggerContainer, useRevealVariants } from '../../animations/variants'
import { formatPrice } from '../../data/menuData'

const paymentLabels = {
  cash: 'Efectivo',
  digital: 'Yape / Plin',
  card: 'Tarjeta',
}

const OrderSuccess = ({ order }) => {
  const navigate = useNavigate()
  const { fadeUp } = useRevealVariants()
  const reduce = useReducedMotion()

  const containerTransition = reduce
    ? { duration: 0.25, ease: 'easeOut' }
    : { type: 'spring', stiffness: 200, damping: 20 }

  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={containerTransition}
    >
      <div className="w-full max-w-2xl rounded-xl border border-white/10 bg-[#101010] p-8 text-center lg:p-10">
        <motion.div
          initial={reduce ? { opacity: 0 } : { scale: 0, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={
            reduce
              ? { duration: 0.2 }
              : { type: 'spring', stiffness: 300, damping: 15, delay: 0.15 }
          }
        >
          <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" aria-hidden="true" />
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.25 }}
        >
          <motion.p
            variants={fadeUp}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-red-400"
          >
            Pedido recibido
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl"
          >
            ¡Gracias por tu pedido!
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-sm font-semibold text-white">
            Pedido #{order.orderNumber}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-2 text-sm text-neutral-400">
            Estamos preparando tu pedido.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#0b0b0b] px-5 py-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45, duration: 0.4, ease: 'easeOut' }}
        >
          <Clock3 className="h-4 w-4 text-red-500" aria-hidden="true" />
          <span className="text-sm font-medium text-neutral-300">Tiempo estimado</span>
          <span className="text-sm font-bold text-white">30–45 minutos</span>
        </motion.div>

        <motion.div
          className="mt-6 space-y-3 text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.55 }}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#0b0b0b] px-5 py-3"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Dirección</p>
              <p className="text-sm text-white">
                {order.address} — {order.district}
              </p>
              {order.reference && (
                <p className="text-xs text-neutral-400">Ref: {order.reference}</p>
              )}
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#0b0b0b] px-5 py-3"
          >
            <MapPin className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Método de pago</p>
              <p className="text-sm text-white">
                {paymentLabels[order.paymentMethod] || order.paymentMethod}
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-between rounded-lg border border-white/10 bg-[#0b0b0b] px-5 py-3"
          >
            <p className="text-xs uppercase tracking-wide text-neutral-500">Total a pagar</p>
            <motion.p
              className="text-lg font-bold text-red-500"
              initial={reduce ? { opacity: 0 } : { scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={
                reduce
                  ? { duration: 0.2 }
                  : { type: 'spring', stiffness: 300, damping: 18, delay: 0.85 }
              }
            >
              {formatPrice(order.total)}
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.3, ease: 'easeOut' }}
        >
          <motion.button
            type="button"
            onClick={() => navigate('/')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg border border-white/15 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/30"
          >
            Volver al inicio
          </motion.button>
          <motion.button
            type="button"
            onClick={() => navigate('/menu')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-500"
          >
            Ver menú
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default OrderSuccess