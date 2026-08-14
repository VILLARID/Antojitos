import { motion } from 'framer-motion'
import { CupSoda, Drumstick, LayoutGrid, Package, PlusCircle, Soup } from 'lucide-react'
import { menuCategories } from '../../data/menuData'

const categoryIcons = {
  all: LayoutGrid,
  pollos: Drumstick,
  combos: Package,
  acompanamientos: Soup,
  bebidas: CupSoda,
  extras: PlusCircle,
}

const MenuCategories = ({ activeCategory, onSelect }) => {
  return (
    <div className="sticky top-20 z-40 border-y border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20">
      <div className="mx-auto max-w-[1440px] px-6 py-4 xl:px-10">
        <ul className="flex gap-2.5 overflow-x-auto lg:flex-wrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {menuCategories.map((category) => {
            const Icon = categoryIcons[category.id]
            const isActive = activeCategory === category.id
            return (
              <li key={category.id} className="shrink-0">
                <motion.button
                  type="button"
                  onClick={() => onSelect(category.id)}
                  aria-pressed={isActive}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className={`relative flex items-center gap-2 whitespace-nowrap rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'border-red-600 bg-red-600/5 text-red-500'
                      : 'border-transparent text-neutral-300 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {category.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-category-dot"
                      className="absolute -bottom-[9px] left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-red-600"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MenuCategories