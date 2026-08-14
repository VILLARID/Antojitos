import { Clock3, Mail, MapPin, Phone } from 'lucide-react'

const contactItems = [
  {
    icon: Phone,
    label: 'Teléfono / WhatsApp',
    value: '+51 987 654 321',
    secondary: 'Lun – Dom: 11:00 a.m. – 11:00 p.m.',
    href: 'tel:+51987654321',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hola@antojitos.com.pe',
    secondary: 'Te responderemos lo antes posible.',
    href: 'mailto:hola@antojitos.com.pe',
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Av. Los Próceres 1234, Lima - Perú',
    secondary: 'Referencia: cerca de una avenida principal.',
  },
  {
    icon: Clock3,
    label: 'Horario de atención',
    value: 'Lunes a Domingo',
    secondary: '11:00 a.m. – 11:00 p.m.',
  },
]

const ContactInfo = () => {
  return (
    <ul>
      {contactItems.map(({ icon: Icon, label, value, secondary, href }) => (
        <li key={label} className="flex items-start gap-4 border-b border-white/10 py-4 last:border-b-0 last:pb-0">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.04]">
            <Icon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">{label}</p>
            {href ? (
              <a
                href={href}
                className="mt-0.5 block text-base font-semibold text-white underline-offset-4 transition-colors hover:text-red-500 hover:underline md:text-lg"
              >
                {value}
              </a>
            ) : (
              <p className="mt-0.5 text-base font-semibold text-white md:text-lg">{value}</p>
            )}
            <p className="mt-0.5 text-sm text-neutral-400">{secondary}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ContactInfo