import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Lineup from '@/components/Lineup'
import Products from '@/components/Products'
import ColorFloor from '@/components/ColorFloor'
import HowItWorks from '@/components/HowItWorks'
import Athletes from '@/components/Athletes'
import FAQPreview from '@/components/FAQPreview'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import MobileCornerBar from '@/components/ring/MobileCornerBar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Lineup />
        <Products />
        <ColorFloor />
        <HowItWorks />
        <Athletes />
        <FAQPreview />
        <CTABanner />
      </main>
      <Footer />
      <MobileCornerBar />
    </>
  )
}
