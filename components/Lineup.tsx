import Image from 'next/image'
import Link from 'next/link'
import { photo } from '@/data/photos'
import { PRO_COLORS } from './MouthguardDesigner/constants'
import Carousel from './ring/Carousel'
import { ArrowIcon } from './ring/icons'

// Mỗi màu nền EVA một chiếc, xếp xen kẽ để hai chiếc cùng màu không đứng cạnh nhau
const PICKS = [
  'raymond', 'tfcmma', 'kevin', 'thanh-phong', 'mikey', 'tiboom', 'wave', 'rabbit',
  'hoang-kha', 'mqh', 'demut', 'wukong-green', 'dont-quit', 'destinee', 'anh-khiem', 'nam-quan',
].map(photo)

// Chấm màu cạnh tên màu nền; ba màu ngoài bảng 16 màu PRO lấy giá trị gần đúng
const SWATCH: Record<string, string> = {
  ...Object.fromEntries(PRO_COLORS.map((c) => [c.name, c.hex])),
  'Trắng': '#F2F4F5',
  'Vàng kim': '#C9A13B',
  'Kim tuyến': '#B8BCC2',
}

// Lineup: băng ảnh cùng kích thước, bấm mũi tên để xem tiếp; chú thích chỉ ghi màu nền EVA
export default function Lineup() {
  return (
    <section aria-labelledby="lineup-title" className="bg-arena py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <h2 id="lineup-title" className="apron t-headline text-arena-ink">
              174+ chiếc.
              <span className="block text-arena-mute">Mỗi chiếc một cái tên.</span>
            </h2>
            <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-arena-mute">
              Tên, số, cờ, logo câu lạc bộ hay hình vẽ tay: tất cả theo ý bạn, từ trong suốt tối giản đến full custom. Đây là
              những chiếc đã rời lab Khai Nguyên.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 lg:flex-col lg:items-end">
            <Link href="/gallery" className="rope-link placard inline-flex items-center gap-2 text-lg text-arena-ink">
              Mở toàn bộ gallery
              <ArrowIcon />
            </Link>
            <Link href="/customize" className="rope-link placard inline-flex items-center gap-2 text-lg text-corner hover:text-arena-ink">
              Thiết kế chiếc của bạn
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <Carousel
            label="Ảnh mouthguard đã làm, dùng nút mũi tên để xem tiếp"
            itemClassName="w-[80%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)]"
          >
            {PICKS.map((p) => (
              <figure key={p.id}>
                <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    placeholder="blur"
                    blurDataURL={p.blurDataURL}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 80vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="placard mt-3 flex items-center gap-2.5 text-lg text-arena-ink">
                  <span
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 rounded-full"
                    style={{ backgroundColor: SWATCH[p.color] ?? '#696969', boxShadow: 'inset 0 0 0 1.5px rgb(255 255 255 / 0.35)' }}
                  />
                  {p.color}
                </figcaption>
              </figure>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
