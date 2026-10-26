import Link from 'next/link'
import { ZALO_URL } from '@/lib/site'
import { ZaloIcon } from './icons'

// Biển gần nhất luôn trội: trên điện thoại, đệm góc nằm ở mép dưới trong tầm ngón cái
export default function MobileCornerBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <span aria-hidden="true" className="rope rope-blue rounded-none" />
      <div className="flex gap-2 bg-arena/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm">
        <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="corner-pad flex-[1.4]">
          <ZaloIcon className="h-5 w-5" />
          Nhắn Zalo
        </a>
        <Link
          href="/order"
          className="placard flex min-h-14 flex-1 items-center justify-center rounded-[14px] bg-arena-lift px-3 text-base text-arena-ink"
        >
          Đặt lịch scan
        </Link>
      </div>
    </div>
  )
}
