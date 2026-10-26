import Link from 'next/link'
import Accordion, { type QA } from './ring/Accordion'
import { ArrowIcon } from './ring/icons'

const faqs: QA[] = [
  {
    q: 'Scan 3D có đau không? Mất bao lâu?',
    a: 'Hoàn toàn không đau. Quá trình scan chỉ mất 10–15 phút: máy scan tạo mô hình 3D chính xác hàm của bạn mà không cần lấy khuôn truyền thống.',
  },
  {
    q: 'Tôi ở tỉnh xa, không đến TP.HCM được thì sao?',
    a: 'TGG hỗ trợ bạn tìm nha khoa gần nhà có máy scan 3D. Scan xong, file được gửi về TGG để sản xuất. Ship miễn phí toàn quốc.',
  },
  {
    q: 'LIGHT và PRO khác nhau thế nào?',
    a: 'LIGHT có 2 lớp EVA mỏng, hợp với môn không đối kháng như bóng rổ, gym. PRO có 3 lớp EVA dày, dành cho boxing, Muay Thái, MMA, bảo vệ tốt hơn khi chịu va chạm mạnh.',
  },
  {
    q: 'Mất bao lâu để nhận hàng?',
    a: 'Sau khi chốt thiết kế (gói Custom Text, Fully Design) hoặc xác nhận đơn (gói Base), TGG sản xuất trong 2–3 ngày làm việc, cộng 1–3 ngày ship tùy khu vực.',
  },
]

export default function FAQPreview() {
  return (
    <section aria-labelledby="faq-title" className="on-canvas bg-canvas pb-24 text-canvas-ink md:pb-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-10 border-t-[3px] border-canvas-ink pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 id="faq-title" className="apron text-[clamp(2.75rem,6vw,5rem)]">Hỏi trước khi lên đài.</h2>
            <Link href="/faq" className="rope-link placard mt-8 inline-flex items-center gap-2 text-lg">
              Xem tất cả câu hỏi
              <ArrowIcon />
            </Link>
          </div>
          <Accordion items={faqs} defaultOpen={0} />
        </div>
      </div>
    </section>
  )
}
