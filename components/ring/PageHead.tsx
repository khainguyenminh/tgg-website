import Image from 'next/image'
import type { Photo } from '@/data/photos'

// Đầu trang con: tiêu đề apron trên nền đen, ảnh studio (nếu có) hoà vào nền ở góc phải,
// khép lại bằng một sợi dây trắng
export default function PageHead({
  title,
  lede,
  photo,
  children,
}: {
  title: React.ReactNode
  lede?: React.ReactNode
  photo?: Photo
  children?: React.ReactNode
}) {
  return (
    <header className="relative isolate overflow-hidden bg-arena pt-16 md:pt-[72px]">
      {photo && (
        <div
          aria-hidden="true"
          className="anim-lights absolute inset-y-0 right-0 -z-10 hidden w-[58%] lg:block"
          style={{
            maskImage: 'linear-gradient(to right, transparent, #000 30%), linear-gradient(to bottom, transparent, #000 18%)',
            maskComposite: 'intersect',
            WebkitMaskImage: 'linear-gradient(to right, transparent, #000 30%), linear-gradient(to bottom, transparent, #000 18%)',
            WebkitMaskComposite: 'source-in',
          }}
        >
          <Image
            src={photo.src}
            alt=""
            fill
            priority
            placeholder="blur"
            blurDataURL={photo.blurDataURL}
            sizes="58vw"
            className="object-cover object-[50%_60%] opacity-80"
          />
        </div>
      )}
      <div className="mx-auto max-w-[1400px] px-4 pb-14 pt-10 md:px-8 md:pb-20 md:pt-16">
        <h1 className="apron max-w-[14ch] text-[clamp(3.2rem,9vw,8.5rem)] text-arena-ink">{title}</h1>
        {lede && <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-arena-mute md:text-xl">{lede}</p>}
        {photo && (
          <figure className="-mx-4 mt-8 md:-mx-8 lg:hidden">
            <div className="relative aspect-[3/2] w-full bg-black">
              <Image src={photo.src} alt={photo.alt} fill priority placeholder="blur" blurDataURL={photo.blurDataURL} sizes="100vw" className="object-cover" />
            </div>
            {photo.lettering && (
              <figcaption className="placard px-4 pt-2 text-right text-sm text-arena-mute md:px-8">
                <span className="text-arena-ink">{photo.lettering}</span> · {photo.color}
              </figcaption>
            )}
          </figure>
        )}
        {children}
      </div>
      <span aria-hidden="true" className="rope rope-white anim-rope block rounded-none opacity-80" />
    </header>
  )
}
