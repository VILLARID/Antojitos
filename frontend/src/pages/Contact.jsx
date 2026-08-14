import ContactIntro from '../components/contact/ContactIntro'
import ContactForm from '../components/contact/ContactForm'
import ContactClosing from '../components/contact/ContactClosing'

const Contact = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#080808]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 82% 32%, rgba(239, 35, 45, 0.06), transparent 45%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-12 xl:px-10 lg:py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 xl:gap-16">
            <ContactIntro />
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactClosing />
    </>
  )
}

export default Contact