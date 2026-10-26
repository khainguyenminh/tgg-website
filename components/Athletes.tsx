import { ZALO_URL } from '@/lib/site'
import Carousel from './ring/Carousel'
import PhotoSlot from './ring/PhotoSlot'
import { ZaloIcon } from './ring/icons'

const parentFacts = [
  'Scan 3D không đau, chỉ 10–15 phút, không cần lấy khuôn truyền thống.',
  'Làm theo hàm trên hiện tại của con, không có size chung.',
  'Trẻ dùng được khi đã mọc đủ răng vĩnh viễn. Chưa chắc con đã đủ chưa? Hỏi TGG trước khi scan.',
]

// Ảnh khách hàng đang đeo guard TGG. Khi có ảnh thật, thay ô chờ bằng ảnh theo cùng tỉ lệ 4:5
const wearers = [
  'Khách hàng cười để lộ guard có tên',
  'VĐV đeo guard PRO khi thi đấu',
  'Khách hàng đeo guard trong buổi tập',
  'VĐV nhỏ tuổi đeo guard LIGHT',
  'Võ sĩ Muay Thái đeo guard trên sàn',
  'Khách hàng đeo guard sau trận đấu',
  'VĐV MMA đeo guard khi sparring',
  'Cận cảnh nụ cười với guard full custom',
]

export default function Athletes() {
  return (
    <section aria-labelledby="athletes-title" className="on-canvas bg-canvas py-24 text-canvas-ink md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <h2 id="athletes-title" className="apron t-headline">Khách hàng đeo guard TGG.</h2>
          <p className="max-w-[30rem] text-lg leading-relaxed text-canvas-mute">
            Võ sĩ, vận động viên và các bạn nhỏ đeo mouthguard TGG khi tập luyện và thi đấu.
          </p>
        </div>

        <div className="mt-12">
          <Carousel
            tone="canvas"
            label="Ảnh khách hàng đeo guard TGG, dùng nút mũi tên để xem tiếp"
            itemClassName="w-[72%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)]"
          >
            {wearers.map((label) => (
              <PhotoSlot key={label} tone="canvas" label={label} className="aspect-[4/5]" />
            ))}
          </Carousel>
        </div>

        {/* Dải cho phụ huynh */}
        <div className="mt-20 grid gap-10 border-t-[3px] border-canvas-ink pt-12 md:mt-24 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="apron t-sub">Cho con bạn.</h3>
            <p className="mt-4 max-w-[28rem] text-lg leading-relaxed text-canvas-mute">
              Ba điều phụ huynh của vận động viên nhỏ tuổi nên biết trước khi đặt.
            </p>
          </div>
          <div>
            <ul className="divide-y-[3px] divide-canvas-deep">
              {parentFacts.map((f) => (
                <li key={f} className="py-5 text-xl leading-snug first:pt-0">{f}</li>
              ))}
            </ul>
            <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="corner-pad mt-8">
              <ZaloIcon />
              Hỏi cho con qua Zalo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
