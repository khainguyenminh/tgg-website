'use client'

import dynamic from 'next/dynamic'

const MouthguardDesigner = dynamic(() => import('./index'), {
  ssr: false,
  loading: () => (
    <div className="max-w-6xl mx-auto px-5 py-24 text-center text-[#94A3B8]">
      Đang tải công cụ thiết kế... / Loading designer...
    </div>
  ),
})

export default function DesignerLoader() {
  return <MouthguardDesigner />
}
