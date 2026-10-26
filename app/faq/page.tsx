import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHead from '@/components/ring/PageHead'
import ZaloClose from '@/components/ring/ZaloClose'
import Accordion from '@/components/ring/Accordion'
import MobileCornerBar from '@/components/ring/MobileCornerBar'
import { ArrowIcon } from '@/components/ring/icons'

export const metadata: Metadata = {
  title: 'Câu hỏi thường gặp — The Guard Guy',
  description: 'Sản phẩm và độ fit, quy trình scan 3D, đối tượng sử dụng, cá nhân hóa, bảo quản và chính sách của mouthguard The Guard Guy.',
}

// ── Dữ liệu FAQ ──────────────────────────────────────────────────────────────

const categories = [
  {
    id: 'product',
    label: 'Sản phẩm & Fit',
    faqs: [
      {
        q: 'LIGHT và PRO khác nhau thế nào?',
        a: 'LIGHT cấu tạo 2 lớp EVA mỏng, nhẹ, chỉ có màu trong suốt, phù hợp cho các môn thể thao không đối kháng như bóng rổ, bóng đá, gym. PRO cấu tạo 3 lớp EVA dày hơn, bảo vệ tốt hơn khi chịu va chạm mạnh, có 16 màu, phù hợp cho combat sports như boxing, Muay Thái, MMA. Cả hai đều custom-fit hoàn toàn theo răng của bạn.',
      },
      {
        q: 'Tại sao nên dùng custom-fit thay vì mua máng đại trà ở tiệm thể thao?',
        a: 'Máng đại trà được làm theo kích cỡ trung bình, không vừa khít răng của bạn, dễ bị tuột, cần cắn giữ liên tục, và thường gây khó thở, khó giao tiếp. Máng custom-fit của TGG được sản xuất trực tiếp từ khuôn răng của bạn bằng quy trình dental lab, vừa khít, không tuột, không cần cắn giữ, thoải mái khi đeo dài.',
      },
      {
        q: 'Máng có bị tuột khi đang thi đấu không?',
        a: 'Không. Vì máng được sản xuất theo đúng khuôn răng của bạn, nó giữ chắc nhờ độ fit chứ không phải nhờ bạn cắn. Ngay cả khi chịu cú đấm bất ngờ (với PRO), máng vẫn giữ đúng vị trí.',
      },
      {
        q: 'Đeo lần đầu có bị cộm, cấn không?',
        a: 'Hầu hết khách hàng cảm thấy thoải mái ngay từ buổi đầu tiên. Có thể có cảm giác lạ trong vài buổi tập đầu vì đây là vật thể mới trong miệng, đây là phản ứng bình thường và sẽ qua nhanh. Nếu có điểm cấn mạnh hoặc khó chịu kéo dài, liên hệ TGG để được hỗ trợ điều chỉnh.',
      },
      {
        q: 'Có làm hàm dưới không?',
        a: 'TGG chủ yếu sản xuất máng hàm trên (upper guard), đây là tiêu chuẩn cho hầu hết các môn thể thao. Nếu bạn có nhu cầu đặc biệt cần máng hàm dưới, liên hệ TGG trực tiếp để được tư vấn.',
      },
    ],
  },
  {
    id: 'process',
    label: 'Quy trình & Thời gian',
    faqs: [
      {
        q: 'Mất bao lâu từ lúc đặt đến khi nhận hàng?',
        a: 'Tổng thời gian gồm 3 phần: (1) Scan 3D, 10–15 phút; (2) Duyệt thiết kế 2D, tối đa 24 giờ (chỉ gói Custom); (3) Sản xuất, 2–3 ngày làm việc sau khi chốt thiết kế. Cộng thêm thời gian vận chuyển tùy địa chỉ.',
      },
      {
        q: 'Scan 3D có đau hoặc khó chịu không?',
        a: 'Hoàn toàn không. Scan 3D intraoral là quy trình không xâm lấn, kỹ thuật viên chỉ đưa một đầu dò nhỏ vào miệng và quét quanh răng. Không cần chích thuốc, không cần mở miệng to, không đau. Toàn bộ quá trình mất khoảng 10–15 phút.',
      },
      {
        q: 'Tôi không ở TP.HCM thì làm sao scan?',
        a: 'Bạn có thể đến bất kỳ nha khoa nào có dịch vụ scan 3D intraoral ở địa phương, sau đó gửi file scan về cho TGG. Nếu chưa biết nha khoa nào gần bạn có dịch vụ này, nhắn TGG, chúng tôi sẽ tư vấn địa chỉ phù hợp.',
      },
      {
        q: 'Có thể xem trước thiết kế trước khi sản xuất không?',
        a: 'Có, với các gói Custom Text và Fully Design, TGG sẽ gửi bản thiết kế 2D để bạn xem và góp ý trước khi sản xuất. Sản xuất chỉ bắt đầu sau khi bạn xác nhận thiết kế.',
      },
    ],
  },
  {
    id: 'who',
    label: 'Đối tượng sử dụng',
    faqs: [
      {
        q: 'Người đang niềng răng có dùng được không?',
        a: 'Người đang niềng răng có thể sử dụng máng bảo vệ, nhưng cần thông báo với TGG khi đặt hàng để được tư vấn phù hợp. Vì răng của bạn đang dịch chuyển trong quá trình niềng, máng có thể cần được làm lại sau một thời gian. Bạn cũng nên tham khảo ý kiến bác sĩ chỉnh nha đang điều trị.',
      },
      {
        q: 'Trẻ em có dùng được không?',
        a: 'Trẻ có thể sử dụng máng khi đã mọc đủ răng vĩnh viễn, đây là thời điểm hàm đã ổn định đủ để custom-fit chính xác. Nếu bạn chưa chắc con đã mọc đủ răng vĩnh viễn chưa, liên hệ TGG để được tư vấn trực tiếp.',
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
    faqs: [
      {
        q: 'Có in tên, logo không?',
        a: 'Có, với gói Custom Text trở lên, bạn có thể thêm tên, số áo, logo, hoặc bất kỳ chữ nào theo yêu cầu. Với gói Fully Design, bạn có thể cá nhân hóa hoàn toàn kể cả hình ảnh và các hiệu ứng đặc biệt như tráng gương, đính đá.',
      },
      {
        q: 'Có bao nhiêu màu để chọn?',
        a: 'Dòng LIGHT chỉ có 1 màu: trong suốt. Dòng PRO có 16 màu để lựa chọn. Liên hệ TGG để xem bảng màu đầy đủ.',
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
    faqs: [
      {
        q: 'Máng dùng được bao lâu?',
        a: 'Tuổi thọ của máng phụ thuộc vào tần suất sử dụng, cường độ tập luyện và cách bảo quản. Với cách vệ sinh và bảo quản đúng cách, máng thường dùng tốt trong khoảng 1–2 năm. Khi thấy máng bị mòn, mất độ fit, hoặc có dấu hiệu hư hỏng thì nên làm lại.',
      },
      {
        q: 'Vệ sinh thế nào?',
        a: 'Sau mỗi lần dùng: rửa bằng nước lạnh, dùng bàn chải mềm và xà phòng nhẹ (hoặc nước súc miệng không cồn). Để khô tự nhiên trước khi cất vào hộp, không để trong hộp kín khi còn ướt. Không ngâm trong nước nóng hoặc để gần nguồn nhiệt. Bảo quản trong hộp đựng chuyên dụng, tránh ánh nắng trực tiếp.',
      },
      {
        q: 'Máng bị mất hoặc hư, có đặt lại được không? TGG có lưu dữ liệu scan không?',
        a: 'Có, TGG lưu dữ liệu scan của bạn. Nếu máng đang đeo ổn và bạn muốn đặt thêm một cái với thiết kế khác, chỉ cần nhắn order, không cần đến scan lại. Ngoài ra, khách hàng cũ quay lại đặt thêm còn được hưởng chương trình giảm giá đặc biệt, liên hệ TGG để biết ưu đãi hiện hành.',
      },
      {
        q: 'Để máng nơi nóng (xe, túi gym) có bị biến dạng không?',
        a: 'Có. EVA là vật liệu nhạy cảm với nhiệt, để máng trong xe dưới trời nắng hoặc gần các vật phát nhiệt có thể làm máng biến dạng và mất fit. Luôn bảo quản máng trong hộp đựng ở nơi thoáng mát, tránh nhiệt độ cao.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Giá & Chính sách',
    faqs: [
      {
        q: 'Giá đã bao gồm scan chưa?',
        a: 'Có. Scan 3D tại TGG hoàn toàn miễn phí và được bao gồm trong tất cả các gói, không phụ thu thêm.',
      },
      {
        q: 'Nếu nhận hàng không vừa thì xử lý thế nào?',
        a: 'TGG đảm bảo về độ khít sát, nếu máng có vấn đề về fit sau khi nhận hàng, TGG bảo hành 1 đổi 1. Liên hệ trực tiếp qua Zalo để được hỗ trợ nhanh nhất.',
      },
      {
        q: 'Có ship toàn quốc không? Phí ship bao nhiêu?',
        a: 'Có, TGG nhận đơn và ship toàn quốc. Miễn phí vận chuyển cho tất cả đơn hàng.',
      },
    ],
  },
]

// ── Trang ────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHead
          title="Câu hỏi thường gặp."
          lede="Mọi thứ bạn cần biết về mouthguard TGG: sản phẩm, quy trình, cách bảo quản và chính sách."
        />

        <section aria-label="Danh sách câu hỏi" className="on-canvas bg-canvas pb-24 text-canvas-ink md:pb-32">
          {/* Mục lục cuộn ngang, ghim dưới menu trên điện thoại */}
          <nav aria-label="Nhóm câu hỏi" className="sticky top-16 z-20 border-b-[3px] border-canvas-deep bg-canvas/95 backdrop-blur-sm lg:hidden">
            <ul className="flex gap-2 overflow-x-auto px-4 py-3">
              {categories.map((c) => (
                <li key={c.id} className="shrink-0">
                  <a href={`#${c.id}`} className="seg whitespace-nowrap">{c.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mx-auto grid max-w-[1400px] gap-12 px-4 pt-12 md:px-8 md:pt-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Mục lục ghim trên desktop */}
            <nav aria-label="Nhóm câu hỏi" className="hidden lg:block">
              <ol className="sticky top-28 border-t-[3px] border-canvas-ink">
                {categories.map((c) => (
                  <li key={c.id} className="border-b-[3px] border-canvas-deep">
                    <a href={`#${c.id}`} className="group flex min-h-14 items-center gap-4 py-3">
                      <span className="placard text-xl group-hover:underline group-hover:decoration-[3px] group-hover:underline-offset-4">{c.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="flex flex-col gap-20">
              {categories.map((c) => (
                <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className="scroll-mt-36 lg:scroll-mt-28">
                  <h2 id={`${c.id}-title`} className="apron mb-8 text-[clamp(2.5rem,5vw,4.25rem)]">{c.label}</h2>
                  <Accordion items={c.faqs} />
                </section>
              ))}
            </div>
          </div>
        </section>

        <ZaloClose
          title="Chưa tìm được câu trả lời?"
          lede="Nhắn trực tiếp, TGG phản hồi trong vòng vài phút qua Zalo."
        >
          <Link href="/order" className="rope-link placard inline-flex items-center gap-2 text-arena-ink">
            Xem quy trình đặt hàng <ArrowIcon />
          </Link>
        </ZaloClose>
      </main>
      <Footer />
      <MobileCornerBar />
    </>
  )
}
