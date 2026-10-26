'use client'

import dynamic from 'next/dynamic'

const MouthguardDesigner = dynamic(() => import('./index'), {
  ssr: false,
  loading: () => (
    <div className="placard mx-auto max-w-[1400px] bg-arena px-4 py-32 text-lg text-arena-mute md:px-8" role="status">
      Đang tải công cụ thiết kế... / Loading designer...
    </div>
  ),
})

export default function DesignerLoader() {
  return <MouthguardDesigner />
}
