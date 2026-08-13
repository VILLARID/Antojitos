import { Link } from 'react-router-dom'
import { Bike, CircleDot, Flame, MapPin, Utensils } from 'lucide-react'
import aboutHeroBg from '../../assets/About/about-hero-bg.jpg'

const quickFacts = [
  { icon: MapPin, title: 'Desde Lima', text: 'Orgullosamente peruanos' },
  { icon: Flame, title: 'Hecho al carbón', text: 'Sabor inconfundible' },
  { icon: CircleDot, title: 'Sabor peruano', text: 'Tradición que nos define' },
]

const AboutHero = () => {
  return (
    <section
      className="relative flex min-h-[520px] items-center overflow-hidden bg-[#0a0806] bg-cover bg-[position:75%_center] bg-no-repeat lg:min-h-[600px]"
      style={{ backgroundImage: `url(${aboutHeroBg})` }}
      aria-label="Sobre Antojitos"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.88) 32%, rgba(0,0,0,0.45) 58%, rgba(0,0,0,0.10) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/25 md:bg-transparent" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-16 xl:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-red-500" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400 md:text-sm">
              Somos Antojitos
            </span>
          </div>

          <h1 className="mt-5 text-5xl font-black uppercase leading-[0.92] tracking-tight text-white md:text-6xl xl:text-7xl">
            Más que pollo,
            <span className="block text-red-500">somos pasión.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-300">
            En Antojitos llevamos el auténtico sabor del pollo a la brasa peruano a tu mesa. Hecho al
            carbón, con ingredientes de calidad y el cariño de siempre, para acompañar los mejores
            momentos en familia.
          </p>

          <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center">
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

          <ul className="mt-10 flex flex-col gap-5 sm:flex-row sm:gap-8">
            {quickFacts.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-white">{title}</span>
                  <span className="text-xs text-neutral-400">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
