# Antojitos

Antojitos is a modern web application for a Peruvian rotisserie chicken restaurant, designed to provide a complete browsing, menu, cart, and delivery experience.

The project was built with **React, JavaScript, Vite, and Tailwind CSS**, featuring a responsive interface, global cart management, and a simulated delivery checkout flow.

---

## Features

- Responsive Home page with a visual hero section
- Complete menu organized by categories
- Rotisserie chicken, combos, side dishes, beverages, and extras
- Product category filtering
- Global shopping cart
- Add products directly from the menu
- Update product quantities
- Remove products from the cart
- Cart item counter in the navigation bar
- Side Cart Drawer
- Visual feedback when adding products
- Delivery checkout page
- Delivery information form
- Payment method selection
- Subtotal, delivery fee, and total calculation
- Simulated order confirmation
- About page with brand storytelling
- Contact page with form validation
- Fully responsive design
- Custom Antojitos visual identity

---

## Tech Stack

- React
- JavaScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React
- React Context API

---

## Project Structure

```text
Antojitos/
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   │   ├── About/
    │   │   ├── Contact/
    │   │   ├── Delivery/
    │   │   ├── Home/
    │   │   └── Menu/
    │   │
    │   ├── components/
    │   │   ├── about/
    │   │   ├── cart/
    │   │   ├── contact/
    │   │   ├── delivery/
    │   │   ├── home/
    │   │   ├── layout/
    │   │   └── menu/
    │   │
    │   ├── context/
    │   ├── data/
    │   ├── layouts/
    │   ├── pages/
    │   ├── router/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    │
    ├── package.json
    └── vite.config.js
```

---

## Pages

### Home

The main presentation page for Antojitos.

It includes:

- Full-width visual hero
- Menu call-to-action
- Delivery call-to-action
- Main brand benefits
- Responsive background composition

---

### Menu

The Menu page provides the complete product catalog.

Categories include:

- Rotisserie Chicken
- Combos
- Side Dishes
- Beverages
- Extras

The page includes category filters, product cards, prices, local product images, and cart integration.

Users can add products directly to the cart without leaving the page.

---

### Delivery

The Delivery page provides a frontend checkout experience.

Users can:

- Select a district
- Enter a delivery address
- Add an address reference
- Enter their name
- Enter their phone number
- Enter an optional email address
- Select a payment method
- Review their order
- Increase product quantities
- Decrease product quantities
- Remove products
- View the subtotal
- View the delivery fee
- View the final total
- Confirm the order

Order confirmation is currently simulated on the frontend.

No real payment or order processing service is connected.

---

### About

The About page focuses on the Antojitos brand identity and story.

It includes:

- Brand introduction
- Antojitos story
- Brand values
- Preparation process
- Visual storytelling sections
- Calls to action for Menu and Delivery

---

### Contact

The Contact page includes:

- Phone information
- Email address
- Demo business address
- Opening hours
- Contact form
- Basic field validation
- Email validation
- Visual success state after submission

The contact form is currently a frontend simulation and does not send messages to a backend service.

---

## Shopping Cart

The shopping cart is managed globally using **React Context API**.

It supports:

- Adding products
- Increasing quantities
- Decreasing quantities
- Removing products
- Calculating totals
- Displaying the current cart quantity in the Navbar

The project also includes a **Cart Drawer**, allowing users to quickly review and modify their order without navigating away from the current page.

---

## Delivery Checkout

The current delivery fee is simulated directly in the frontend.

The project does not currently include:

- Real geolocation
- Dynamic delivery pricing
- Maps integration
- Payment gateway integration
- Backend order processing
- Database persistence
- Live order tracking

The checkout flow is designed to demonstrate the complete frontend experience of a restaurant delivery application.

---

## Responsive Design

Antojitos was designed to provide a consistent experience across different screen sizes.

The interface supports:

- Desktop
- Laptop
- Tablet
- Mobile

Layouts, typography, navigation, product grids, checkout components, and forms adapt responsively depending on the available screen size.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/VILLARID/Antojitos.git
```

Navigate to the frontend directory:

```bash
cd Antojitos/frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Design System

The Antojitos visual identity is primarily based on:

- Black backgrounds
- Red action and accent colors
- White typography
- Warm orange and fire tones
- High-contrast food photography
- Subtle borders
- Dark interface cards
- Strong typographic hierarchy

The goal is to combine a modern digital ordering experience with the visual identity of traditional Peruvian rotisserie chicken.

---

## Application Flow

The main user flow is:

```text
Home
  |
  v
Menu
  |
  v
Add Products
  |
  v
Cart
  |
  v
Delivery
  |
  v
Delivery Information
  |
  v
Payment Method
  |
  v
Order Confirmation
```

This allows the project to demonstrate more than static page design by including reusable components, state management, cart interactions, forms, validation, and a complete frontend ordering flow.

---

## Project Status

This project is currently a **frontend portfolio project and demonstration application**.

The following features are simulated:

- Order confirmation
- Payment methods
- Business contact details
- Store address
- Delivery availability
- Delivery times

The application does not process real payments or submit real orders.

---

## Future Improvements

Possible future improvements include:

- REST API backend
- Database integration
- User authentication
- Persistent shopping cart
- Customer accounts
- Order history
- Real order processing
- Administrative dashboard
- Product management
- Stock and availability management
- Dynamic pricing
- Coupon system
- Dynamic delivery fee calculation
- Maps integration
- Delivery zone validation
- Yape and Plin integration
- Credit and debit card payments
- Live order tracking

---

## Author

Developed by **Farid Matos Villarroel**.

This project was created as part of a web development portfolio.

---

## License

This project was developed for educational and portfolio purposes.

Any third-party trademarks, product names, or brand assets that may appear in demonstration content belong to their respective owners.
