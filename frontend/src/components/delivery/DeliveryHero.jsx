import { Bike, Clock3, MapPin, ShieldCheck } from 'lucide-react'
import deliveryHeroBg from '../../assets/Delivery/delivery-hero-bg.jpg'

const benefits = [
  { icon: Clock3, title: 'Rápido', text: '30–45 min' },
  { icon: ShieldCheck, title: 'Seguro', text: 'Entrega confiable' },
  { icon: MapPin, title: 'Cobertura', text: 'Lima Metropolitana' },
]

const DeliveryHero = () => {
  return (
    <section
      className="relative flex min-h-[320px] items-center overflow-hidden bg-[#0a0806] bg-cover bg-center bg-no-repeat lg:min-h-[340px]"
      style={{ backgroundImage: `url(${deliveryHeroBg})` }}
      aria-label="Delivery Antojitos"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.80) 35%, rgba(0,0,0,0.30) 65%, rgba(0,0,0,0.08) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-10 xl:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-red-500" aria-hidden="true" />
            <Bike className="h-4 w-4 text-red-500" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400 md:text-sm">
              Delivery Antojitos
            </span>
          </div>
          <h1 className="mt-3 text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-5xl">
            Tu antojo,
            <span className="block text-red-500">directo a tu puerta</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-300 md:text-base">
            Disfruta nuestro pollo a la brasa desde la comodidad de tu hogar. Envíos rápidos, seguros
            y con todo el sabor de Antojitos.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="text-xs text-neutral-400">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default DeliveryHero