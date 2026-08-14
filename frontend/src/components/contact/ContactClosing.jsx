import { Flame } from 'lucide-react'

const ContactClosing = () => {
  return (
    <section className="bg-[#080808]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-10 xl:px-10 lg:py-12">
        <div className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-[#0d0d0d] px-6 py-10 text-center sm:flex-row sm:justify-between sm:px-10 sm:text-left">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.04]">
              <Flame className="h-5 w-5 text-red-500" aria-hidden="true" />
            </span>
            <div>
              <p className="text-lg font-semibold text-white md:text-xl">
                Seguimos encendiendo el sabor que te encanta.
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                Gracias por ser parte de Antojitos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactClosing