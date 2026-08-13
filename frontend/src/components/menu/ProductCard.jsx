import { useState } from 'react'
import { Check, Drumstick, Flame, Plus } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../data/menuData'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const [justAdded, setJustAdded] = useState(false)
  const { imagePosition = 'center' } = product

  const handleAdd = () => {
    setJustAdded(true)
    addToCart(product)
    window.setTimeout(() => setJustAdded(false), 900)
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101010] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/20">
      <div className="relative h-[210px] w-full overflow-hidden lg:h-[220px]">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            style={{ objectPosition: imagePosition }}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1412] via-[#141009] to-[#0a0908]"
            aria-hidden="true"
          >
            <Drumstick className="h-12 w-12 text-white/10" />
          </div>
        )}
        {product.featured && (
          <span className="absolute left-0 top-0 flex items-center gap-1.5 rounded-br-lg bg-red-600 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            <Flame className="h-3.5 w-3.5" aria-hidden="true" />
            Más pedido
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-semibold leading-snug text-white">{product.name}</h3>
        {product.description && (
          <p className="text-sm leading-relaxed text-neutral-400">{product.description}</p>
        )}
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-lg font-bold text-red-500">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Agregar ${product.name} al carrito`}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 ${
              justAdded
                ? 'border-red-600 bg-red-600 text-white'
                : 'border-white/30 bg-transparent text-white hover:border-red-600 hover:bg-red-600'
            }`}
          >
            {justAdded ? (
              <Check className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Plus className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard