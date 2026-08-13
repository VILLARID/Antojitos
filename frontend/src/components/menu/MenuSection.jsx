import ProductCard from './ProductCard'

const MenuSection = ({ eyebrow, title, description, products, variant = 'default' }) => {
  return (
    <section className={`py-14 lg:py-16 ${variant === 'soft' ? 'bg-[#0c0c0c]' : 'bg-[#080808]'}`}>
      <div className="mx-auto w-full max-w-[1440px] px-6 xl:px-10">
        <div className="mb-2">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-red-500" aria-hidden="true" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
              {eyebrow}
            </span>
          </div>
          <h2 className="mt-2 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-2 max-w-xl text-sm text-neutral-400 md:text-base">{description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-7 lg:grid-cols-4 lg:mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection