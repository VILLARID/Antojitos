import { Flame, Heart, Leaf } from 'lucide-react'

const values = [
  {
    icon: Flame,
    title: 'Sabor auténtico',
    text: 'Receta tradicional, marinada con dedicación y braseada al carbón.',
  },
  {
    icon: Leaf,
    title: 'Ingredientes frescos',
    text: 'Seleccionamos ingredientes frescos para garantizar sabor y calidad.',
  },
  {
    icon: Heart,
    title: 'Atención cercana',
    text: 'Queremos que cada pedido se sienta rápido, sencillo y cercano.',
  },
]

const BrandValues = () => {
  return (
    <section className="bg-[#0c0c0c]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 xl:px-10 lg:py-24">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-red-500" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400 md:text-sm">
            Lo que nos mueve
          </span>
        </div>
        <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
          Lo que nos mueve
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
          Tres principios guían cada plato que preparamos y cada pedido que servimos.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.04] sm:flex-row sm:items-start"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-950/60 ring-1 ring-red-900/40">
                <Icon className="h-5 w-5 text-red-500" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandValues
