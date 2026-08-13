# Brasa Real · Frontend

Proyecto frontend de la pollería **BRASA REAL** (POLLERÍA).

## Stack

- React 19
- Vite
- JavaScript (sin TypeScript)
- Tailwind CSS v4
- React Router DOM
- Lucide React

## Requisitos

- Node.js 20+ y npm

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Estructura

- `src/router/` → rutas (`AppRouter.jsx`)
- `src/layouts/` → layout principal (`MainLayout.jsx`)
- `src/components/layout/` → `Navbar` y `Footer`
- `src/pages/` → páginas de la aplicación
- `src/context/CartContext.jsx` → estado global del carrito (Context API + localStorage)
- `src/data/menuData.js` → catálogo de productos (provisional)
