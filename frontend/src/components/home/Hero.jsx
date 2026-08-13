import { Link } from 'react-router-dom'
import { Bike, Flame, Leaf, ShieldCheck, Utensils } from 'lucide-react'
import heroBg from '../../assets/Home/hero-bg.jpg'

const benefits = [
  { icon: Flame, title: 'A la brasa', subtitle: 'Sabor auténtico' },
  { icon: Leaf, title: 'Ingredientes', subtitle: 'frescos' },
  { icon: Bike, title: 'Delivery', subtitle: 'rápido' },
  { icon: ShieldCheck, title: 'Pago', subtitle: 'seguro' },
]

const Hero = () => {
  return (
    <section
      className="relative flex flex-1 items-center overflow-x-hidden bg-cover bg-[position:65%_center] bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
      aria-label="Intro Antojitos"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.86) 28%, rgba(0,0,0,0.48) 52%, rgba(0,0,0,0.12) 78%, rgba(0,0,0,0.05) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/30 md:bg-transparent" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-16 xl:px-10">
        <div className="max-w-3xl">
          <div
            className="flex items-center gap-3 opacity-0"
            style={{ animation: 'heroFadeUp 0.7s ease forwards' }}
          >
            <span className="h-px w-8 bg-red-500" aria-hidden="true" />
            <Flame className="h-4 w-4 text-red-500" aria-hidden="true" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
              El sabor que nos hace únicos
            </span>
          </div>

          <h1
            className="mt-5 text-5xl font-extrabold uppercase leading-[0.88] tracking-tight text-white md:text-6xl lg:text-7xl xl:text-[76px] opacity-0"
            style={{ animation: 'heroFadeUp 0.7s ease 0.15s forwards' }}
          >
            Pollo a la brasa
            <span className="block text-red-500">que enamora</span>
          </h1>

          <p
            className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-300 opacity-0"
            style={{ animation: 'heroFadeUp 0.7s ease 0.3s forwards' }}
          >
            Jugoso, dorado y lleno de sabor. Nuestro pollo a la brasa, preparado al carbón y
            listo para llegar hasta tu puerta.
          </p>

          <div
            className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center opacity-0"
            style={{ animation: 'heroFadeUp 0.7s ease 0.45s forwards' }}
          >
            <Link
              to="/menu"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-950/20 transition-colors duration-200 hover:bg-red-500 sm:w-auto"
            >
              <Utensils className="h-5 w-5" aria-hidden="true" />
              Ver menú
            </Link>
            <Link
              to="/delivery"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/35 bg-black/25 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/10 sm:w-auto"
            >
              <Bike className="h-5 w-5" aria-hidden="true" />
              Pedir delivery
            </Link>
          </div>

          <ul
            className="mt-10 grid w-full max-w-2xl grid-cols-2 gap-x-8 gap-y-6 md:flex md:items-center md:gap-0 opacity-0"
            style={{ animation: 'heroFadeUp 0.7s ease 0.6s forwards' }}
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <li
                  key={benefit.title}
                  className="flex items-center gap-3 md:px-7 md:first:pl-0 md:last:pr-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-white/10"
                >
                  <Icon className="h-6 w-6 shrink-0 text-red-500" aria-hidden="true" />
                  <span className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-white">{benefit.title}</span>
                    <span className="text-xs text-neutral-400">{benefit.subtitle}</span>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero