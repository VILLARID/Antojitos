import { Link } from 'react-router-dom'
import { Bike, Utensils } from 'lucide-react'

const AboutCTA = () => {
  return (
    <section className="bg-[#0c0c0c]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 text-center xl:px-10 lg:py-28">
        <h2 className="mx-auto max-w-3xl text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
          ¿Listo para disfrutar Antojitos?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
          Elige tu favorito y disfruta el sabor de la brasa donde estés.
        </p>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/menu"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-7 py-3 font-semibold text-white shadow-lg shadow-red-950/20 transition-colors duration-200 hover:bg-red-500 sm:w-auto"
          >
            <Utensils className="h-5 w-5" aria-hidden="true" />
            Ver menú
          </Link>
          <Link
            to="/delivery"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/35 bg-black/25 px-7 py-3 font-semibold text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/10 sm:w-auto"
          >
            <Bike className="h-5 w-5" aria-hidden="true" />
            Pedir delivery
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutCTA
