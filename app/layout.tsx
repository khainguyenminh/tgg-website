import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Inter, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['700', '800'],
  variable: '--font-be-vietnam',
})

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin', 'vietnamese'],
  weight: ['600'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'The Guard Guy — Custom Sport Mouthguard',
  description: 'Custom-fit sports mouthguard chế tác riêng cho bạn.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body
        style={{ backgroundColor: '#0A1628', color: '#F1F5F9' }}
        className={`${beVietnamPro.variable} ${inter.variable} ${barlowCondensed.variable} font-body`}
      >
        {children}
      </body>
    </html>
  )
}