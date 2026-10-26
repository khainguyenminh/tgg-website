import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DesignerLoader from '@/components/MouthguardDesigner/DesignerLoader'
import MobileCornerBar from '@/components/ring/MobileCornerBar'

export const metadata: Metadata = {
  title: 'Tự thiết kế mouthguard — The Guard Guy',
  description: 'Chọn màu, thêm ảnh, thêm chữ và tải preview mouthguard tùy chỉnh của bạn.',
}

export default function CustomizePage() {
  return (
    <>
      <Navbar />
      <main className="bg-arena pt-16 md:pt-[72px]">
        <DesignerLoader />
      </main>
      <Footer />
      <MobileCornerBar />
    </>
  )
}
