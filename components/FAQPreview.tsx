'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    q: 'Scan 3D có đau không? Mất bao lâu?',
    a: 'Hoàn toàn không đau. Quá trình scan chỉ mất 10–15 phút — máy scan sẽ tạo mô hình 3D chính xác của hàm bạn mà không cần lấy khuôn truyền thống.',
  },
  {
    q: 'Tôi ở tỉnh xa, không đến TP.HCM được thì sao?',
    a: 'TGG hỗ trợ bạn tìm nha khoa gần nhà có máy scan 3D. Sau khi scan xong, file được gửi về TGG để sản xuất. Ship miễn phí toàn quốc.',
  },
  {
    q: 'Khác nhau giữa LIGHT và PRO là gì?',
    a: 'LIGHT (2 lớp EVA mỏng) phù hợp cho thể thao không đối kháng như bóng rổ, gym. PRO (3 lớp EVA dày) dành cho combat sports: boxing, Muay Thái, MMA — bảo vệ tốt hơn khi chịu va chạm mạnh.',
  },
  {
    q: 'Mất bao lâu để nhận hàng?',
    a: 'Sau khi chốt thiết kế (với gói Custom/Fully Design) hoặc xác nhận đơn (gói Base), TGG sản xuất trong 2–3 ngày làm việc. Cộng thêm 1–3 ngày ship tùy khu vực.',
  },
  {
    q: 'Tôi có thể đặt logo câu lạc bộ / tên / số lên mouthguard không?',
    a: 'Có. Gói Custom Text cho phép in tên và số; gói Fully Design cho phép thiết kế tự do — logo, màu sắc, họa tiết theo yêu cầu. TGG có đội design hỗ trợ.',
  },
]

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#0F1F38] py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#1CA6DF] uppercase tracking-widest">FAQ</span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mt-3 mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-[#94A3B8] text-sm">
            Chưa thấy câu trả lời? Nhắn trực tiếp qua Zalo.
          </p>
        </div>

        <div className="space-y-3 mb-10">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#1E3350] rounded-xl overflow-hidden bg-[#152035] transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-white text-sm md:text-base">
                  {faq.q}
                </span>
                <span
                  className={`text-[#1CA6DF] text-xl flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/faq"
            className="inline-block text-[#1CA6DF] hover:text-white font-semibold text-sm transition-colors"
          >
            Xem tất cả câu hỏi →
          </Link>
        </div>

      </div>
    </section>
  )
}
