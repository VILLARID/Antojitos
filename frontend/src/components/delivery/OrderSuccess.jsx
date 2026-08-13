import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock3, MapPin } from 'lucide-react'
import { formatPrice } from '../../data/menuData'

const paymentLabels = {
  cash: 'Efectivo',
  digital: 'Yape / Plin',
  card: 'Tarjeta',
}

const OrderSuccess = ({ order }) => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl rounded-xl border border-white/10 bg-[#101010] p-8 text-center lg:p-10">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" aria-hidden="true" />
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
          Pedido recibido
        </p>
        <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl">
          ¡Gracias por tu pedido!
        </h2>
        <p className="mt-3 text-sm font-semibold text-white">Pedido #{order.orderNumber}</p>
        <p className="mt-2 text-sm text-neutral-400">Estamos preparando tu pedido.</p>

        <div className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#0b0b0b] px-5 py-3">
          <Clock3 className="h-4 w-4 text-red-500" aria-hidden="true" />
          <span className="text-sm font-medium text-neutral-300">Tiempo estimado</span>
          <span className="text-sm font-bold text-white">30–45 minutos</span>
        </div>

        <div className="mt-6 space-y-3 text-left">
          <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#0b0b0b] px-5 py-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Dirección</p>
              <p className="text-sm text-white">
                {order.address} — {order.district}
              </p>
              {order.reference && <p className="text-xs text-neutral-400">Ref: {order.reference}</p>}
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#0b0b0b] px-5 py-3">
            <MapPin className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Método de pago</p>
              <p className="text-sm text-white">{paymentLabels[order.paymentMethod] || order.paymentMethod}</p>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-[#0b0b0b] px-5 py-3">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Total a pagar</p>
            <p className="text-lg font-bold text-red-500">{formatPrice(order.total)}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-lg border border-white/15 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/30"
          >
            Volver al inicio
          </button>
          <button
            type="button"
            onClick={() => navigate('/menu')}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-500"
          >
            Ver menú
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess