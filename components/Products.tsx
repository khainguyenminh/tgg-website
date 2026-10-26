import Image from 'next/image'
import Link from 'next/link'
import { photo } from '@/data/photos'
import { ArrowIcon } from './ring/icons'
import CrossSection from './ring/CrossSection'

const tiers = [
  { name: 'Base', desc: 'Trơn, không in', light: '1.400.000đ', pro: '1.800.000đ' },
  { name: 'Custom Text', desc: 'Thêm tên hoặc số', light: '1.500.000đ', pro: '1.900.000đ' },
  { name: 'Fully Design', desc: 'Thiết kế hoàn toàn theo ý', light: '1.600.000đ', pro: '2.000.000đ' },
]

const lines = [
  {
    key: 'light',
    name: 'LIGHT',
    tagline: 'Light & Comfort',
    layers: 2,
    layerNote: '2 lớp EVA mỏng',
    facts: ['Bóng rổ, bóng đá, gym và các môn không đối kháng', 'Màu trong suốt', 'Hàm trên, scan 3D miễn phí'],
    from: '1.400.000đ',
    photo: photo('lab-light-on-model'),
    photoCaption: 'LIGHT trong suốt trên mẫu hàm',
  },
  {
    key: 'pro',
    name: 'PRO',
    tagline: 'Guard & Protection',
    layers: 3,
    layerNote: '3 lớp EVA dày',
    facts: ['Boxing, Muay Thái, MMA và các môn đối kháng', '16 màu EVA, in tên, số, logo', 'Hàm trên, scan 3D miễn phí'],
    from: '1.800.000đ',
    photo: photo('dvn'),
    photoCaption: 'PRO xanh hoàng gia, in chữ DVN',
  },
] as const

export default function Products() {
  return (
    <section aria-labelledby="products-title" className="on-canvas relative bg-canvas py-24 text-canvas-ink md:py-32">
      <span aria-hidden="true" className="rope rope-red absolute inset-x-0 top-0 rounded-none" />
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <h2 id="products-title" className="apron text-[clamp(3rem,8.5vw,7.5rem)]">Không có size S/M/L.</h2>
        <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-canvas-mute">
          Hai dòng LIGHT và PRO, cả hai đều làm theo hàm trên của bạn từ dữ liệu scan 3D. Khác nhau ở số lớp EVA và môn bạn tập.
        </p>

        <div className="mt-14 grid gap-16 lg:grid-cols-[1fr_3px_1fr] lg:gap-12">
          {lines.map((line, i) => (
            <div key={line.key} className={`contents`}>
              {i === 1 && <span aria-hidden="true" className="rope rope-ink hidden h-auto w-[3px] lg:block" />}
              <article className="flex flex-col">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="apron text-[clamp(4.5rem,9vw,8rem)]">{line.name}</h3>
                    <p className="placard mt-1 text-lg text-canvas-mute">{line.tagline}</p>
                  </div>
                  <p className="text-right">
                    <span className="block text-sm text-canvas-mute">từ</span>
                    <span className="placard tabular text-3xl normal-case md:text-4xl">{line.from}</span>
                  </p>
                </div>

                <figure className="mt-8">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
                    <Image
                      src={line.photo.src}
                      alt={line.photo.alt}
                      fill
                      placeholder="blur"
                      blurDataURL={line.photo.blurDataURL}
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm text-canvas-mute">{line.photoCaption}</figcaption>
                </figure>

                <div className="mt-8 grid items-center gap-6 sm:grid-cols-[1fr_1.1fr]">
                  <div>
                    <p className="placard text-2xl">{line.layerNote}</p>
                    <ul className="mt-4 space-y-2 text-base leading-snug">
                      {line.facts.map((f) => (
                        <li key={f} className="flex gap-3">
                          <span aria-hidden="true" className="mt-[0.6em] h-[3px] w-4 shrink-0 rounded bg-canvas-ink" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <CrossSection layers={line.layers} />
                </div>

                <Link
                  href={`/order?line=${line.key}`}
                  className="placard mt-10 inline-flex min-h-14 items-center justify-center gap-2 self-start rounded-[14px] bg-canvas-ink px-7 text-lg text-canvas transition-colors hover:bg-[#2A3138]"
                >
                  Đặt {line.name}
                  <ArrowIcon />
                </Link>
              </article>
            </div>
          ))}
        </div>

        {/* Bảng giá gọn: một bảng, không phải hai thẻ */}
        <div className="mt-20">
          <h3 className="placard mb-4 text-2xl sm:hidden">Bảng giá</h3>
          {/* Điện thoại: mỗi gói một khối, giá LIGHT/PRO đứng cạnh nhau */}
          <ul className="border-t-[3px] border-canvas-ink sm:hidden">
            {tiers.map((t) => (
              <li key={t.name} className="border-b border-canvas-deep py-4">
                <p className="placard text-xl">{t.name}</p>
                <p className="text-base text-canvas-mute">{t.desc}</p>
                <dl className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <dt className="placard text-sm text-canvas-mute">LIGHT</dt>
                    <dd className="placard tabular text-xl normal-case">{t.light}</dd>
                  </div>
                  <div>
                    <dt className="placard text-sm text-canvas-mute">PRO</dt>
                    <dd className="placard tabular text-xl normal-case">{t.pro}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
          <table className="hidden w-full border-collapse text-left sm:table">
            <caption className="placard mb-4 text-left text-2xl">Bảng giá</caption>
            <thead>
              <tr className="border-b-[3px] border-canvas-ink">
                <th scope="col" className="placard py-3 pr-4 text-base text-canvas-mute">Gói</th>
                <th scope="col" className="placard py-3 pr-4 text-right text-base text-canvas-mute">LIGHT</th>
                <th scope="col" className="placard py-3 text-right text-base text-canvas-mute">PRO</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((t) => (
                <tr key={t.name} className="border-b border-canvas-deep">
                  <th scope="row" className="py-4 pr-4 font-normal">
                    <span className="placard block text-xl">{t.name}</span>
                    <span className="text-base text-canvas-mute">{t.desc}</span>
                  </th>
                  <td className="placard tabular py-4 pr-4 text-right text-xl normal-case">{t.light}</td>
                  <td className="placard tabular py-4 text-right text-xl normal-case">{t.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-base text-canvas-mute">Scan 3D miễn phí · Ship miễn phí toàn quốc · 2–3 ngày sản xuất</p>
            <Link href="/products" className="rope-link placard inline-flex items-center gap-2 text-lg">
              So sánh chi tiết
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
