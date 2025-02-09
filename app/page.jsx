import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import CoreValues from './components/CoreValues'
import ProductLines from './components/ProductLines'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PaymentWarning from '@/components/PaymentWarning'

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">

      {/* <Hero />
      <About />
      <Vision />
      <CoreValues />
      <ProductLines />
      <WhyChooseUs />
      <Contact />
      <Footer /> */}
      <PaymentWarning />
      
    </main>
  )
}
