import { ZALO_URL } from '@/lib/site'
import PhotoSlot from './ring/PhotoSlot'
import { ZaloIcon } from './ring/icons'

const parentFacts = [
  'Scan 3D không đau, chỉ 10–15 phút, không cần lấy khuôn truyền thống.',
  'Làm theo hàm trên hiện tại của con, không có size chung.',
  'Trẻ dùng được khi đã mọc đủ răng vĩnh viễn. Chưa chắc con đã đủ chưa? Hỏi TGG trước khi scan.',
]

// Trên sàn đấu: chừa sẵn chỗ cho ảnh VĐV đeo guard và lời chứng thực thật
export default function Athletes() {
  return (
    <section aria-labelledby="athletes-title" className="on-canvas bg-canvas py-24 text-canvas-ink md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <h2 id="athletes-title" className="apron text-[clamp(3rem,8.5vw,7.5rem)]">Trên sàn đấu.</h2>
        <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-canvas-mute">
          Võ sĩ và vận động viên đeo guard TGG khi tập và khi thi đấu.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:h-[30rem] md:grid-cols-[1.3fr_1fr] md:grid-rows-2">
          <PhotoSlot tone="canvas" label="VĐV đeo guard PRO trên sàn đấu" className="col-span-2 aspect-[3/2] md:col-span-1 md:row-span-2 md:aspect-auto" />
          <PhotoSlot tone="canvas" label="Võ sĩ cười để lộ guard có tên" className="aspect-[3/2] md:aspect-auto" />
          <PhotoSlot tone="canvas" label="Lời chứng thực của VĐV hoặc HLV" className="aspect-[3/2] md:aspect-auto" />
        </div>

        {/* Dải cho phụ huynh */}
        <div className="mt-24 grid gap-10 border-t-[3px] border-canvas-ink pt-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="apron text-[clamp(2.75rem,6vw,5rem)]">Cho con bạn.</h3>
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
