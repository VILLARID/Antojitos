import { Flame } from 'lucide-react'
import menuHeroBg from '../../assets/Menu/menu-hero-bg.jpg'

const MenuHero = () => {
  return (
    <section
      className="relative flex min-h-[300px] items-center overflow-hidden bg-[#0a0806] bg-cover bg-center bg-no-repeat lg:min-h-[300px]"
      style={{ backgroundImage: `url(${menuHeroBg})` }}
      aria-label="Nuestro menú"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.18) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-12 xl:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-red-500" aria-hidden="true" />
            <Flame className="h-4 w-4 text-red-500" aria-hidden="true" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
              Nuestro menú
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold uppercase leading-[0.9] tracking-tight text-white md:text-5xl lg:text-[52px]">
            <span className="lg:mr-3">Sabor que</span>
            <span className="block text-red-500">se comparte</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-300 md:text-base">
            Pollo a la brasa preparado al carbón con una receta única y acompañado de los mejores
            ingredientes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MenuHero