import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DesignerLoader from '@/components/MouthguardDesigner/DesignerLoader'

export const metadata: Metadata = {
  title: 'Tự thiết kế mouthguard — The Guard Guy',
  description: 'Chọn màu, thêm ảnh, thêm chữ và tải preview mouthguard tùy chỉnh của bạn.',
}

export default function CustomizePage() {
  return (
    <main className="pt-16">
      <Navbar />
      <DesignerLoader />
      <Footer />
    </main>
  )
}
