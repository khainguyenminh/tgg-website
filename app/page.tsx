import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import GalleryPreview from '@/components/GalleryPreview'
import CTABanner from '@/components/CTABanner'
import FAQPreview from '@/components/FAQPreview'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Benefits />
      <HowItWorks />
      <GalleryPreview />
      <CTABanner />
      <FAQPreview />
      <Footer />
    </main>
  )
}
