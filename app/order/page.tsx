import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OrderForm from '@/components/OrderForm'
import PageHead from '@/components/ring/PageHead'
import ZaloClose from '@/components/ring/ZaloClose'
import MobileCornerBar from '@/components/ring/MobileCornerBar'
import { ArrowIcon } from '@/components/ring/icons'
import { photo } from '@/data/photos'
import { FACEBOOK_URL, INSTAGRAM_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Đặt hàng — The Guard Guy',
  description: 'Đặt mouthguard custom-fit online: điền form, TGG xác nhận và hẹn lịch scan 3D miễn phí. Không cần đặt cọc, ship miễn phí toàn quốc.',
}

// ── Dữ liệu ──────────────────────────────────────────────────────────────────

const NOTES = [
  'Scan 3D tại TGG hoàn toàn miễn phí, không tính thêm phí dù chọn gói nào.',
  'Khách đến scan tại TGG cần đặt hẹn trước, không nhận khách vãng lai.',
  'Khách tỉnh chưa biết nha khoa scan có thể nhắn TGG để được hỗ trợ tìm địa điểm.',
  'Miễn phí ship toàn quốc, không cộng thêm phụ phí vận chuyển.',
]

// ── Trang ────────────────────────────────────────────────────────────────────

export default function OrderPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHead
          title="Đặt hàng."
          lede="Điền form, TGG xác nhận và hẹn lịch scan với bạn. Không cần đặt cọc, không cần đến TP.HCM nếu bạn ở tỉnh."
          photo={photo('case-box')}
        >
          {/* Tóm tắt 5 bước; chi tiết nằm ở trang Quy trình */}
          <ol className="mt-8 flex flex-wrap gap-x-5 gap-y-2" aria-label="5 bước đặt hàng">
            {['Tư vấn', 'Scan 3D', 'Duyệt thiết kế', 'Sản xuất', 'Nhận hàng'].map((p, i) => (
              <li key={p} className="placard flex items-center gap-2 text-base text-arena-ink">
                <span className="apron tabular text-xl leading-none text-corner">{i + 1}</span>
                {p}
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            <a href="#order-form" className="rope-link placard inline-flex min-h-11 items-center gap-2 text-xl text-arena-ink">
              Điền form đặt hàng <ArrowIcon className="h-5 w-5 rotate-90" />
            </a>
            <Link href="/quy-trinh" className="rope-link placard inline-flex min-h-11 items-center gap-2 text-xl text-arena-mute hover:text-arena-ink">
              Xem chi tiết quy trình <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </PageHead>

        {/* Form trên canvas */}
        <section id="order-form" aria-labelledby="form-title" className="on-canvas relative scroll-mt-16 bg-canvas py-24 text-canvas-ink md:py-32">
          <span aria-hidden="true" className="rope rope-blue absolute inset-x-0 top-0 rounded-none" />
          <div className="mx-auto grid max-w-[1400px] gap-14 px-4 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <h2 id="form-title" className="apron t-sub">Điền thông tin.</h2>
              <p className="mt-6 max-w-[28rem] text-lg leading-relaxed text-canvas-mute">
                Không cần đặt cọc trước. Bảo hành fit 1 đổi 1. TGG xác nhận và đặt hẹn scan với bạn ngay sau khi nhận.
              </p>
              <h3 className="placard mt-12 text-xl">Lưu ý</h3>
              <ul className="mt-4 divide-y-[3px] divide-canvas-deep border-t-[3px] border-canvas-ink">
                {NOTES.map((n) => (
                  <li key={n} className="py-4 text-base leading-relaxed">{n}</li>
                ))}
              </ul>
            </div>
            <Suspense fallback={null}>
              <OrderForm />
            </Suspense>
          </div>
        </section>

        <ZaloClose title="Muốn hỏi trước khi điền form?" lede="Nhắn trực tiếp qua Zalo 0975 580 253, hoặc Instagram và Facebook của TGG.">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rope-link placard text-arena-mute hover:text-arena-ink">
            Instagram
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="rope-link placard text-arena-mute hover:text-arena-ink">
            Facebook
          </a>
          <Link href="/products" className="rope-link placard inline-flex items-center gap-2 text-arena-ink">
            Xem sản phẩm và giá <ArrowIcon />
          </Link>
        </ZaloClose>
      </main>
      <Footer />
      <MobileCornerBar />
    </>
  )
}
