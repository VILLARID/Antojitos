import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Utensils } from 'lucide-react'
import { useCart } from '../context/CartContext'
import DeliveryHero from '../components/delivery/DeliveryHero'
import DeliveryForm from '../components/delivery/DeliveryForm'
import PaymentMethods from '../components/delivery/PaymentMethods'
import OrderSummary from '../components/delivery/OrderSummary'
import OrderSuccess from '../components/delivery/OrderSuccess'

const DELIVERY_FEE = 6

const initialDelivery = {
  district: '',
  address: '',
  reference: '',
  name: '',
  phone: '',
  email: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[\d\s]{7,15}$/

const validate = (values) => {
  const errors = {}
  if (!values.district) errors.district = 'Selecciona tu distrito'
  if (!values.address.trim()) errors.address = 'Ingresa tu dirección'
  if (!values.name.trim()) errors.name = 'Ingresa tu nombre'
  if (!values.phone.trim()) errors.phone = 'Ingresa tu teléfono'
  else if (values.phone.trim() && !phoneRegex.test(values.phone.trim()))
    errors.phone = 'Ingresa un teléfono válido (solo números y espacios)'
  if (values.email.trim() && !emailRegex.test(values.email.trim()))
    errors.email = 'Ingresa un email válido'
  return errors
}

const Delivery = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart()
  const navigate = useNavigate()
  const [deliveryData, setDeliveryData] = useState(initialDelivery)
  const [errors, setErrors] = useState({})
  const [paymentMethod, setPaymentMethod] = useState('cash')
  const [order, setOrder] = useState(null)

  const total = useMemo(
    () => (cartItems.length > 0 ? cartTotal + DELIVERY_FEE : 0),
    [cartItems.length, cartTotal],
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    const newErrors = validate(deliveryData)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    const orderData = {
      orderNumber: `ANT-${Math.floor(1000 + Math.random() * 9000)}`,
      district: deliveryData.district,
      address: deliveryData.address.trim(),
      reference: deliveryData.reference.trim(),
      paymentMethod,
      total,
    }
    setOrder(orderData)
    clearCart()
  }

  return (
    <>
      <DeliveryHero />
      <div className="bg-[#080808]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-10 xl:px-10 lg:py-14">
          {order ? (
            <OrderSuccess order={order} />
          ) : cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
              <Utensils className="h-12 w-12 text-white/10" aria-hidden="true" />
              <div>
                <p className="text-xl font-semibold text-white">Tu carrito está vacío</p>
                <p className="mx-auto mt-2 max-w-md text-sm text-neutral-400">
                  Todavía no agregaste productos. Explora nuestro menú y encuentra tu próximo antojo.
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/menu')}
                className="mt-2 rounded-lg bg-red-600 px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-500"
              >
                Ver menú
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
                <div className="space-y-6">
                  <DeliveryForm
                    values={deliveryData}
                    onChange={setDeliveryData}
                    errors={errors}
                  />
                  <PaymentMethods value={paymentMethod} onChange={setPaymentMethod} />
                </div>
                <OrderSummary
                  items={cartItems}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                  subtotal={cartTotal}
                  deliveryFee={DELIVERY_FEE}
                  total={total}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  )
}

export default Delivery