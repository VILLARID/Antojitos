import { useMemo, useState } from 'react'
import { menuCategories, menuItems } from '../data/menuData'
import MenuHero from '../components/menu/MenuHero'
import MenuCategories from '../components/menu/MenuCategories'
import MenuSection from '../components/menu/MenuSection'

const sectionMeta = {
  pollos: { eyebrow: 'El clásico', title: 'Pollo a la brasa', description: 'Nuestro pollo, el protagonista.' },
  combos: { eyebrow: 'Para compartir', title: 'Combos', description: 'Combos perfectos para toda la mesa.' },
  acompanamientos: { eyebrow: 'Para acompañar', title: 'Acompañamientos', description: 'El complemento ideal para tu pollo.' },
  bebidas: { eyebrow: 'Para refrescar', title: 'Bebidas', description: 'Bebidas frías para completar el momento.' },
  extras: { eyebrow: 'Extras', title: 'Extras', description: 'Salsas y porciones adicionales a tu gusto.' },
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return menuItems
    return menuItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const visibleCategories = useMemo(
    () =>
      activeCategory === 'all'
        ? menuCategories.filter((category) => category.id !== 'all')
        : menuCategories.filter((category) => category.id === activeCategory),
    [activeCategory],
  )

  return (
    <>
      <MenuHero />
      <MenuCategories activeCategory={activeCategory} onSelect={setActiveCategory} />
      {visibleCategories.map((category, index) => {
        const meta = sectionMeta[category.id]
        return (
          <MenuSection
            key={category.id}
            variant={index % 2 !== 0 ? 'soft' : 'default'}
            eyebrow={meta.eyebrow}
            title={meta.title}
            description={meta.description}
            products={filteredItems.filter((item) => item.category === category.id)}
          />
        )
      })}
    </>
  )
}

export default Menu