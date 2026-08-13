import { CookingPot, Drumstick, Flame, PackageCheck } from 'lucide-react'

const steps = [
  { icon: Drumstick, number: '01', title: 'Seleccionamos', text: 'Elegimos pollo e ingredientes frescos.' },
  { icon: CookingPot, number: '02', title: 'Marinamos', text: 'Preparamos cada pieza con nuestra mezcla de sabores.' },
  { icon: Flame, number: '03', title: 'Braseamos', text: 'Cocinamos al carbón hasta lograr el punto perfecto.' },
  { icon: PackageCheck, number: '04', title: 'Servimos', text: 'Preparamos tu pedido para disfrutarlo caliente.' },
]

const OurProcess = () => {
  return (
    <section className="bg-[#080808]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 xl:px-10 lg:py-24">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-red-500" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400 md:text-sm">
              Nuestro proceso
            </span>
            <span className="h-px w-8 bg-red-500" aria-hidden="true" />
          </div>
          <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
            Nuestro proceso
          </h2>
          <p className="mt-3 text-base text-neutral-400 md:text-lg">Del ingrediente a tu mesa.</p>
        </div>

        <div className="relative mt-12">
          <div
            className="absolute left-[24px] top-2 hidden h-px bg-red-500/60 md:left-[25%] md:right-[25%] md:block"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
            {steps.map(({ icon: Icon, number, title, text }, index) => (
              <li key={number} className="relative flex gap-5 md:flex-col md:items-center md:gap-4 md:text-center">
                <div className="flex flex-col items-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#101010] ring-1 ring-red-900/30">
                    <Icon className="h-6 w-6 text-red-500" aria-hidden="true" />
                  </span>
                  {index < steps.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-red-500/40 md:hidden" aria-hidden="true" />
                  )}
                </div>
                <div className="pb-2 md:pb-0">
                  <p className="text-xs font-bold tracking-[0.25em] text-red-500">{number}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-400 md:mx-auto">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default OurProcess
