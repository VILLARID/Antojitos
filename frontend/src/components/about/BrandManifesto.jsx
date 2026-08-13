import aboutManifestoBg from '../../assets/About/about-manifesto-bg.jpg'

const stats = [
  { value: '10K+', label: 'Pedidos servidos' },
  { value: '30–45 min', label: 'Delivery estimado' },
  { value: '4.8/5', label: 'Experiencia promedio' },
  { value: '100%', label: 'Sabor al carbón' },
]

const BrandManifesto = () => {
  return (
    <section className="bg-[#080808]">
      <div
        className="relative flex min-h-[420px] items-center overflow-hidden bg-cover bg-center bg-no-repeat lg:min-h-[500px]"
        style={{ backgroundImage: `url(${aboutManifestoBg})` }}
        aria-label="El sabor Antojitos"
      >
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.30), rgba(8,8,8,0.95))',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-20 xl:px-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-6xl">
              El sabor empieza
              <span className="block">mucho antes de</span>
              <span className="block text-red-500">llegar a tu mesa.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-200 md:text-lg">
              Cada ingrediente, cada minuto de cocción y cada detalle forman parte de la experiencia
              Antojitos.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 xl:px-10">
        <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center border-white/10 text-center md:border-r md:last:border-r-0"
            >
              <dt className="order-2 mt-2 text-sm text-neutral-400 md:mt-3">{label}</dt>
              <dd className="order-1 text-3xl font-extrabold text-white md:text-4xl">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default BrandManifesto
