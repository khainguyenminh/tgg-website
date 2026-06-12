'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ── FAQ data ─────────────────────────────────────────────────────────────────

const categories = [
  {
    id: 'product',
    label: 'Sản phẩm & Fit',
    icon: '🛡️',
    faqs: [
      {
        q: 'LIGHT và PRO khác nhau thế nào?',
        a: 'LIGHT cấu tạo 2 lớp EVA mỏng, nhẹ, chỉ có màu trong suốt — phù hợp cho các môn thể thao không đối kháng như bóng rổ, bóng đá, gym. PRO cấu tạo 3 lớp EVA dày hơn, bảo vệ tối đa, có hơn 10 màu — phù hợp cho combat sports như boxing, Muay Thái, MMA. Cả hai đều custom-fit hoàn toàn theo răng của bạn.',
      },
      {
        q: 'Tại sao nên dùng custom-fit thay vì mua máng đại trà ở tiệm thể thao?',
        a: 'Máng đại trà được làm theo kích cỡ trung bình — không vừa khít răng của bạn, dễ bị tuột, cần cắn giữ liên tục, và thường gây khó thở, khó giao tiếp. Máng custom-fit của TGG được sản xuất trực tiếp từ khuôn răng của bạn bằng quy trình dental lab — vừa khít, không tuột, không cần cắn giữ, thoải mái khi đeo dài.',
      },
      {
        q: 'Máng có bị tuột khi đang thi đấu không?',
        a: 'Không. Vì máng được sản xuất theo đúng khuôn răng của bạn, nó giữ chắc nhờ độ fit chứ không phải nhờ bạn cắn. Ngay cả khi chịu cú đấm bất ngờ (với PRO), máng vẫn giữ đúng vị trí.',
      },
      {
        q: 'Đeo lần đầu có bị cộm, cấn không?',
        a: 'Hầu hết khách hàng cảm thấy thoải mái ngay từ buổi đầu tiên. Có thể có cảm giác lạ trong vài buổi tập đầu vì đây là vật thể mới trong miệng — đây là phản ứng bình thường và sẽ qua nhanh. Nếu có điểm cấn mạnh hoặc khó chịu kéo dài, liên hệ TGG để được hỗ trợ điều chỉnh.',
      },
      {
        q: 'Có làm hàm dưới không?',
        a: 'TGG chủ yếu sản xuất máng hàm trên (upper guard) — đây là tiêu chuẩn cho hầu hết các môn thể thao. Nếu bạn có nhu cầu đặc biệt cần máng hàm dưới, liên hệ TGG trực tiếp để được tư vấn.',
      },
    ],
  },
  {
    id: 'process',
    label: 'Quy trình & Thời gian',
    icon: '📦',
    faqs: [
      {
        q: 'Mất bao lâu từ lúc đặt đến khi nhận hàng?',
        a: 'Tổng thời gian gồm 3 phần: (1) Scan 3D — 10–15 phút; (2) Duyệt thiết kế 2D — tối đa 24 giờ (chỉ gói Custom); (3) Sản xuất — 2–3 ngày làm việc sau khi chốt thiết kế. Cộng thêm thời gian vận chuyển tùy địa chỉ.',
      },
      {
        q: 'Scan 3D có đau hoặc khó chịu không?',
        a: 'Hoàn toàn không. Scan 3D intraoral là quy trình không xâm lấn — kỹ thuật viên chỉ đưa một đầu dò nhỏ vào miệng và quét quanh răng. Không cần chích thuốc, không cần mở miệng to, không đau. Toàn bộ quá trình mất khoảng 10–15 phút.',
      },
      {
        q: 'Tôi không ở TP.HCM thì làm sao scan?',
        a: 'Bạn có thể đến bất kỳ nha khoa nào có dịch vụ scan 3D intraoral ở địa phương, sau đó gửi file scan về cho TGG. Nếu chưa biết nha khoa nào gần bạn có dịch vụ này, nhắn TGG — chúng tôi sẽ tư vấn địa chỉ phù hợp.',
      },
      {
        q: 'Có thể xem trước thiết kế trước khi sản xuất không?',
        a: 'Có — với các gói Custom Text và Fully Design, TGG sẽ gửi bản thiết kế 2D để bạn xem và góp ý trước khi sản xuất. Sản xuất chỉ bắt đầu sau khi bạn xác nhận thiết kế.',
      },
    ],
  },
  {
    id: 'who',
    label: 'Đối tượng sử dụng',
    icon: '👤',
    faqs: [
      {
        q: 'Người đang niềng răng có dùng được không?',
        a: 'Người đang niềng răng có thể sử dụng máng bảo vệ, nhưng cần thông báo với TGG khi đặt hàng để được tư vấn phù hợp. Vì răng của bạn đang dịch chuyển trong quá trình niềng, máng có thể cần được làm lại sau một thời gian. Bạn cũng nên tham khảo ý kiến bác sĩ chỉnh nha đang điều trị.',
      },
      {
        q: 'Trẻ em có dùng được không?',
        a: 'Trẻ có thể sử dụng máng khi đã mọc đủ răng vĩnh viễn — đây là thời điểm hàm đã ổn định đủ để custom-fit chính xác. Nếu bạn chưa chắc con đã mọc đủ răng vĩnh viễn chưa, liên hệ TGG để được tư vấn trực tiếp.',
      },
      {
        q: 'Người vừa nhổ răng hoặc mới làm implant có đặt được không?',
        a: 'Nên chờ cho vết thương lành hoàn toàn trước khi scan và đặt máng, vì hình dạng nướu và hàm có thể thay đổi trong thời gian lành thương. Nếu bạn có kế hoạch làm implant, tốt nhất nên đặt máng sau khi implant đã ổn định hoàn toàn. Liên hệ TGG để tư vấn thời điểm phù hợp.',
      },
    ],
  },
  {
    id: 'design',
    label: 'Cá nhân hóa',
    icon: '🎨',
    faqs: [
      {
        q: 'Có in tên, logo không?',
        a: 'Có — với gói Custom Text trở lên, bạn có thể thêm tên, số áo, logo, hoặc bất kỳ chữ nào theo yêu cầu. Với gói Fully Design, bạn có thể cá nhân hóa hoàn toàn kể cả hình ảnh và các hiệu ứng đặc biệt như tráng gương, đính đá.',
      },
      {
        q: 'Có bao nhiêu màu để chọn?',
        a: 'Dòng LIGHT chỉ có 1 màu: trong suốt. Dòng PRO có hơn 10 màu để lựa chọn. Liên hệ TGG để xem bảng màu đầy đủ.',
      },
      {
        q: 'Tôi có thể mang file thiết kế sẵn không?',
        a: 'Có. Nếu bạn đã có ý tưởng thiết kế, logo sẵn, hoặc file artwork, cứ gửi cho TGG khi đặt hàng. Đội ngũ TGG sẽ lên bản thiết kế dựa trên yêu cầu của bạn và gửi preview để xác nhận trước khi sản xuất.',
      },
    ],
  },
  {
    id: 'care',
    label: 'Bảo quản & Độ bền',
    icon: '🧼',
    faqs: [
      {
        q: 'Máng dùng được bao lâu?',
        a: 'Tuổi thọ của máng phụ thuộc vào tần suất sử dụng, cường độ tập luyện và cách bảo quản. Với cách vệ sinh và bảo quản đúng cách, máng thường dùng tốt trong khoảng 1–2 năm. Khi thấy máng bị mòn, mất độ fit, hoặc có dấu hiệu hư hỏng thì nên làm lại.',
      },
      {
        q: 'Vệ sinh thế nào?',
        a: 'Sau mỗi lần dùng: rửa bằng nước lạnh, dùng bàn chải mềm và xà phòng nhẹ (hoặc nước súc miệng không cồn). Để khô tự nhiên trước khi cất vào hộp — không để trong hộp kín khi còn ướt. Không ngâm trong nước nóng hoặc để gần nguồn nhiệt. Bảo quản trong hộp đựng chuyên dụng, tránh ánh nắng trực tiếp.',
      },
      {
        q: 'Máng bị mất hoặc hư — có đặt lại được không? TGG có lưu dữ liệu scan không?',
        a: 'Có — TGG lưu dữ liệu scan của bạn. Nếu máng đang đeo ổn và bạn muốn đặt thêm một cái với thiết kế khác, chỉ cần nhắn order, không cần đến scan lại. Ngoài ra, khách hàng cũ quay lại đặt thêm còn được hưởng chương trình giảm giá đặc biệt — liên hệ TGG để biết ưu đãi hiện hành.',
      },
      {
        q: 'Để máng nơi nóng (xe, túi gym) có bị biến dạng không?',
        a: 'Có. EVA là vật liệu nhạy cảm với nhiệt — để máng trong xe dưới trời nắng hoặc gần các vật phát nhiệt có thể làm máng biến dạng và mất fit. Luôn bảo quản máng trong hộp đựng ở nơi thoáng mát, tránh nhiệt độ cao.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Giá & Chính sách',
    icon: '💳',
    faqs: [
      {
        q: 'Giá đã bao gồm scan chưa?',
        a: 'Có. Scan 3D tại TGG hoàn toàn miễn phí và được bao gồm trong tất cả các gói, không phụ thu thêm.',
      },
      {
        q: 'Nếu nhận hàng không vừa thì xử lý thế nào?',
        a: 'TGG đảm bảo về độ khít sát — nếu máng có vấn đề về fit sau khi nhận hàng, TGG bảo hành 1 đổi 1. Liên hệ trực tiếp qua Zalo để được hỗ trợ nhanh nhất.',
      },
      {
        q: 'Có ship toàn quốc không? Phí ship bao nhiêu?',
        a: 'Có — TGG nhận đơn và ship toàn quốc. Miễn phí vận chuyển cho tất cả đơn hàng.',
      },
    ],
  },
]

// ── Accordion item ────────────────────────────────────────────────────────────

function AccordionItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-[#1E3350] rounded-xl overflow-hidden bg-[#152035] transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-white text-sm md:text-base leading-snug">
          {q}
        </span>
        <span
          className={`text-[#1CA6DF] text-xl flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-[#94A3B8] text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('product')
  const [openItem, setOpenItem] = useState<string | null>(null)

  const currentCategory = categories.find((c) => c.id === activeCategory)!

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key)

  return (
    <div style={{ backgroundColor: '#0A1628', minHeight: '100vh' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 px-6 text-center">
        <span className="text-xs font-bold text-[#1CA6DF] uppercase tracking-widest">FAQ</span>
        <h1 className="font-heading font-black text-4xl md:text-6xl text-white mt-3 mb-4 leading-tight">
          Câu hỏi thường gặp
        </h1>
        <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
          Mọi thứ bạn cần biết về TGG mouthguard — sản phẩm, quy trình, và cách bảo quản.
        </p>
      </section>

      {/* ── Category tabs ── */}
      <section className="px-6 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id)
                  setOpenItem(null)
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[#1CA6DF] text-white border-[#1CA6DF]'
                    : 'bg-[#152035] text-[#94A3B8] border-[#1E3350] hover:border-[#1CA6DF]/50 hover:text-white'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ list ── */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {currentCategory.faqs.map((faq, i) => {
              const key = `${activeCategory}-${i}`
              return (
                <AccordionItem
                  key={key}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openItem === key}
                  onToggle={() => toggle(key)}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Still have questions ── */}
      <section className="bg-[#0F1F38] py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-black text-3xl text-white mb-3">
            Chưa tìm được câu trả lời?
          </h2>
          <p className="text-[#94A3B8] mb-8">
            Nhắn trực tiếp — TGG phản hồi trong vòng vài phút qua Zalo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://zalo.me/0975580253"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1CA6DF] hover:bg-[#1590C2] text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.35A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.46-4.54-1.26l-.32-.19-3.02.8.81-2.96-.21-.34A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              Nhắn Zalo
            </a>
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1CA6DF] text-[#1CA6DF] hover:bg-[#1CA6DF] hover:text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Xem quy trình đặt hàng
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
