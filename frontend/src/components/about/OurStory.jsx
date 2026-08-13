import aboutStory from '../../assets/About/about-story.jpg'

const OurStory = () => {
  return (
    <section className="bg-[#080808]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 xl:px-10 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[45fr_55fr] md:gap-14">
          <div className="relative">
            <img
              src={aboutStory}
              alt="Una mesa compartida con pollo a la brasa en Antojitos"
              className="h-72 w-full rounded-xl object-cover md:h-[440px]"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-xl"
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0) 50%)',
              }}
              aria-hidden="true"
            />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-red-500" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400 md:text-sm">
                Nuestra historia
              </span>
            </div>
            <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
              Nuestra historia
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-300 md:text-lg">
              <p>
                Antojitos nació del amor por el pollo a la brasa y del deseo de compartir ese sabor
                que reúne a todos alrededor de la mesa.
              </p>
              <p>
                Desde nuestros inicios, cuidamos cada detalle: ingredientes frescos, una buena
                marinada y el punto exacto de braseado.
              </p>
              <p>
                Nuestro objetivo es sencillo: servir comida que se sienta familiar, auténtica y
                hecha con dedicación.
              </p>
            </div>
            <p className="mt-6 max-w-lg text-lg font-semibold leading-relaxed text-red-500">
              Porque en Antojitos no solo preparamos pollo, creamos momentos para compartir.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
