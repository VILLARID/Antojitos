import { Banknote, CreditCard, LockKeyhole, Smartphone } from 'lucide-react'

const methods = [
  { id: 'cash', label: 'Efectivo', text: 'Paga al recibir', icon: Banknote },
  { id: 'digital', label: 'Yape / Plin', text: 'Paga con tu app', icon: Smartphone },
  { id: 'card', label: 'Tarjeta', text: 'Débito o crédito', icon: CreditCard },
]

const CardPay = ({ id, label, text, icon: Icon, selected, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(id)}
    aria-pressed={selected}
    className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-all duration-200 ${
      selected
        ? 'border-red-500 bg-red-500/5'
        : 'border-white/10 bg-[#0b0b0b] hover:border-white/25'
    }`}
  >
    <Icon className={`h-5 w-5 shrink-0 ${selected ? 'text-red-500' : 'text-neutral-400'}`} aria-hidden="true" />
    <div>
      <p className={`text-sm font-semibold ${selected ? 'text-white' : 'text-neutral-300'}`}>{label}</p>
      <p className="text-xs text-neutral-400">{text}</p>
    </div>
  </button>
)

const PaymentMethods = ({ value, onChange }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-[#101010] p-6">
      <h2 className="mb-5 text-lg font-bold uppercase tracking-wide text-white">Método de pago</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {methods.map((method) => (
          <CardPay
            key={method.id}
            {...method}
            selected={value === method.id}
            onSelect={onChange}
          />
        ))}
      </div>
      <p className="mt-5 flex items-center gap-2 text-xs text-neutral-500">
        <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
        Pago 100% seguro. Tu información está protegida.
      </p>
    </div>
  )
}

export default PaymentMethods