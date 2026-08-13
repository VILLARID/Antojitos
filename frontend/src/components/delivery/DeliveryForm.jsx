import { MapPin } from 'lucide-react'

const districts = [
  'Santiago de Surco',
  'Miraflores',
  'San Borja',
  'Surquillo',
  'La Molina',
  'San Isidro',
  'Barranco',
  'Chorrillos',
]

const inputStyles = 'w-full rounded-lg border border-white/10 bg-[#0b0b0b] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-red-500 focus:ring-1 focus:ring-red-500/20 focus:outline-none transition-colors'

const errorText = 'mt-1.5 text-xs text-red-500'

const Field = ({ label, error, children }) => (
  <div>
    <label className="mb-1.5 block text-sm font-medium text-neutral-300">{label}</label>
    {children}
    {error && <p className={errorText}>{error}</p>}
  </div>
)

const DeliveryForm = ({ values, onChange, errors }) => {
  const handleChange = (field) => (event) => {
    const { value } = event.target
    if (field === 'phone' && value && !/^[\d\s]*$/.test(value)) return
    onChange({ ...values, [field]: value })
  }

  return (
    <div className="rounded-xl border border-white/10 bg-[#101010] p-6">
      <h2 className="mb-5 flex items-center gap-2 text-lg font-bold uppercase tracking-wide text-white">
        <MapPin className="h-5 w-5 text-red-500" aria-hidden="true" />
        Datos de entrega
      </h2>

      <div className="space-y-4">
        <Field label="Distrito *" error={errors.district}>
          <select
            value={values.district}
            onChange={handleChange('district')}
            className={`${inputStyles} ${values.district ? 'text-white' : 'text-neutral-500'}`}
          >
            <option value="" disabled>
              Selecciona tu distrito
            </option>
            {districts.map((district) => (
              <option key={district} value={district} className="text-white">
                {district}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Dirección *" error={errors.address}>
          <input
            type="text"
            value={values.address}
            onChange={handleChange('address')}
            placeholder="Ej. Av. Arequipa 1234"
            className={inputStyles}
          />
        </Field>

        <Field label="Referencia" error={errors.reference}>
          <input
            type="text"
            value={values.reference}
            onChange={handleChange('reference')}
            placeholder="Ej. Frente a la puerta negra"
            className={inputStyles}
          />
        </Field>

        <Field label="Nombre completo *" error={errors.name}>
          <input
            type="text"
            value={values.name}
            onChange={handleChange('name')}
            placeholder="Ej. Juan Pérez"
            className={inputStyles}
          />
        </Field>

        <Field label="Teléfono *" error={errors.phone}>
          <input
            type="tel"
            value={values.phone}
            onChange={handleChange('phone')}
            placeholder="Ej. 987 654 321"
            className={inputStyles}
          />
        </Field>

        <Field label="Email (opcional)" error={errors.email}>
          <input
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            placeholder="Ej. juan@gmail.com"
            className={inputStyles}
          />
        </Field>
      </div>
    </div>
  )
}

export default DeliveryForm