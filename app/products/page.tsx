import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHead from '@/components/ring/PageHead'
import ZaloClose from '@/components/ring/ZaloClose'
import MobileCornerBar from '@/components/ring/MobileCornerBar'
import ProductTabs from '@/components/products/ProductTabs'
import { ArrowIcon } from '@/components/ring/icons'
import { photo } from '@/data/photos'
import { PRICE_FROM } from '@/lib/packages'

export const metadata: Metadata = {
  title: 'Sản phẩm LIGHT & PRO — The Guard Guy',
  description: 'Hai dòng mouthguard custom-fit theo khuôn răng thật: LIGHT 2 lớp EVA cho vận động, PRO 3 lớp EVA cho đối kháng. Bảng giá và so sánh.',
}

// Chỉ những dòng thật sự khác nhau; phần giống nhau ghi một lần bên dưới
const COMPARISON = [
  { label: 'Cấu tạo', pro: '3 lớp EVA dày', light: '2 lớp EVA mỏng' },
  { label: 'Cảm giác', pro: 'Chắc, hấp thụ lực va chạm', light: 'Nhẹ, thoáng, ít cản thở' },
  { label: 'Phù hợp cho', pro: 'Các môn đối kháng', light: 'Thể thao không đối kháng' },
  { label: 'Màu sắc', pro: '16 màu EVA', light: 'Trong suốt' },
  { label: 'Giá từ', pro: PRICE_FROM.pro, light: PRICE_FROM.light },
]

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHead
          title="Hai dòng. Một tiêu chuẩn."
          lede="Làm theo khuôn răng thật của bạn từ dữ liệu scan 3D. Không phải loại ngâm nước nóng rồi cắn, không có size chung."
          photo={photo('tiboom')}
        >
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-1">
            {['Scan 3D miễn phí', 'Không cần đặt cọc', 'Bảo hành fit 1 đổi 1', 'Ship miễn phí toàn quốc'].map((p) => (
              <li key={p} className="placard flex items-center gap-2 text-base text-arena-ink">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-corner" />
                {p}
              </li>
            ))}
          </ul>
        </PageHead>

        <ProductTabs />

        {/* So sánh nhanh hai dòng */}
        <section aria-labelledby="compare-title" className="on-canvas bg-canvas pb-24 text-canvas-ink md:pb-32">
          <div className="mx-auto max-w-[1400px] px-4 md:px-8">
            <div className="grid gap-10 border-t-[3px] border-canvas-ink pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <h2 id="compare-title" className="apron t-sub">PRO hay LIGHT?</h2>
                <p className="mt-6 max-w-[28rem] text-lg leading-relaxed text-canvas-mute">
                  Cùng quy trình, cùng lab. Khác nhau ở số lớp EVA, màu và môn bạn tập.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-2 border-b-[3px] border-canvas-ink pb-3 sm:grid-cols-[1fr_1fr_1fr]">
                  <span className="hidden sm:block" />
                  <span className="placard text-xl">PRO</span>
                  <span className="placard text-xl">LIGHT</span>
                </div>
                <dl>
                  {COMPARISON.map((row) => (
                    <div key={row.label} className="grid grid-cols-2 gap-x-4 border-b border-canvas-deep py-4 sm:grid-cols-[1fr_1fr_1fr]">
                      <dt className="placard col-span-2 mb-1 text-sm text-canvas-mute sm:col-span-1 sm:mb-0 sm:text-base">{row.label}</dt>
                      <dd className={row.label === 'Giá từ' ? 'placard tabular text-xl normal-case' : 'text-base'}>{row.pro}</dd>
                      <dd className={row.label === 'Giá từ' ? 'placard tabular text-xl normal-case' : 'text-base'}>{row.light}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-base leading-relaxed text-canvas-mute">
                  Cả hai dòng: làm cho hàm trên, scan 3D miễn phí, sản xuất 2–3 ngày làm việc, ship miễn phí toàn quốc.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ZaloClose
          title="Chưa biết chọn gói nào?"
          lede="Nhắn Zalo, TGG tư vấn miễn phí và giúp bạn chọn đúng ngay từ đầu, dựa trên môn thể thao và nhu cầu cá nhân hóa của bạn."
          cta="Tư vấn qua Zalo"
        >
          <Link href="/order" className="rope-link placard inline-flex min-h-11 items-center gap-2 text-arena-ink">
            Đặt hàng online <ArrowIcon />
          </Link>
          <Link href="/quy-trinh" className="rope-link placard inline-flex min-h-11 items-center gap-2 text-arena-mute hover:text-arena-ink">
            Xem quy trình
          </Link>
        </ZaloClose>
      </main>
      <Footer />
      <MobileCornerBar />
    </>
  )
}
