import { MapPin } from 'lucide-react'
import ContactInfo from './ContactInfo'

const ContactIntro = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-red-500" aria-hidden="true" />
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
          Estamos para ti
        </span>
      </div>

      <h1 className="mt-5 text-5xl font-black uppercase leading-[0.92] tracking-tight text-white xl:text-[58px]">
        <span className="block">Hablemos.</span>
        <span className="block text-red-500">Estamos listos</span>
        <span className="block">para servirte.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
        ¿Tienes alguna consulta, sugerencia o necesitas ayuda con tu pedido? Escríbenos o llámanos.
        Estaremos encantados de atenderte.
      </p>

      <div className="mt-4 md:mt-6">
        <ContactInfo />
      </div>

      <p className="mt-8 flex items-center gap-3 text-sm text-neutral-400">
        <MapPin className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
        Atendemos en Lima Metropolitana.
      </p>
    </div>
  )
}

export default ContactIntro