import { useState } from 'react'
import { CheckCircle2, Mail, Send, ShieldCheck } from 'lucide-react'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const inputStyles =
  'w-full rounded-lg border border-white/10 bg-[#0b0b0b] px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-red-500 focus:ring-1 focus:ring-red-500/20 focus:outline-none transition-colors'

const getInputErrorStyles = (hasError) =>
  `${inputStyles} ${hasError ? 'border-red-500' : ''}`

const Field = ({ label, id, error, children }) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-neutral-300">
      {label}
    </label>
    {children}
    {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
  </div>
)

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (field) => (event) => {
    const { value } = event.target
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Este campo es obligatorio.'
    if (!formData.email.trim()) newErrors.email = 'Este campo es obligatorio.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      newErrors.email = 'Ingresa un correo válido.'
    if (!formData.subject.trim()) newErrors.subject = 'Este campo es obligatorio.'
    if (!formData.message.trim()) newErrors.message = 'Este campo es obligatorio.'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setSent(true)
    setFormData(initialForm)
  }

  return (
    <div className="rounded-xl border border-white/10 bg-[#101010]/95 p-6 lg:p-8 xl:p-9">
      <h2 className="flex items-center gap-2 text-2xl font-bold uppercase tracking-wide text-white">
        <Mail className="h-5 w-5 text-red-500" aria-hidden="true" />
        Envíanos un mensaje
      </h2>

      {sent ? (
        <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-10 text-center">
          <CheckCircle2 className="h-12 w-12 text-emerald-500" aria-hidden="true" />
          <p className="text-lg font-bold text-white">Mensaje enviado</p>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
            Gracias por escribirnos. Te responderemos lo antes posible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Nombre *" id="contact-name" error={errors.name}>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={handleChange('name')}
                placeholder="Ej. Juan Pérez"
                className={getInputErrorStyles(errors.name)}
              />
            </Field>
            <Field label="Email *" id="contact-email" error={errors.email}>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                placeholder="Ej. juan@gmail.com"
                className={getInputErrorStyles(errors.email)}
              />
            </Field>
          </div>

          <Field label="Asunto *" id="contact-subject" error={errors.subject}>
            <input
              id="contact-subject"
              type="text"
              value={formData.subject}
              onChange={handleChange('subject')}
              placeholder="¿En qué podemos ayudarte?"
              className={getInputErrorStyles(errors.subject)}
            />
          </Field>

          <Field label="Mensaje *" id="contact-message" error={errors.message}>
            <textarea
              id="contact-message"
              value={formData.message}
              onChange={handleChange('message')}
              placeholder="Cuéntanos tu consulta o sugerencia..."
              rows={5}
              className={`${getInputErrorStyles(errors.message)} min-h-[170px] resize-none`}
            />
          </Field>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-red-500"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
            Enviar mensaje
          </button>

          <p className="flex items-center justify-start gap-2 text-sm text-neutral-500">
            <ShieldCheck className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
            Tu información está segura con nosotros. Nunca compartiremos tus datos.
          </p>
        </form>
      )}
    </div>
  )
}

export default ContactForm