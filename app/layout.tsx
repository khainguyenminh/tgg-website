import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

// Một họ chữ, hai độ rộng: 62% cho chữ apron trên mép đài, 100% cho chữ đọc
const archivo = Archivo({
  subsets: ['latin', 'vietnamese'],
  axes: ['wdth'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: 'The Guard Guy — Mouthguard custom-fit theo răng của bạn',
  description:
    'Mouthguard custom-fit làm tại Khai Nguyên Dental Lab từ dữ liệu scan 3D của chính bạn. Boxing, Muay Thái, MMA và các môn không đối kháng.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Biến font phải nằm ở <html>: token --font-* của @theme được tính tại :root
    <html lang="vi" className={archivo.variable}>
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}
