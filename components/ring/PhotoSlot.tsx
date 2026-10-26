import { CameraIcon } from './icons'

// Ô ảnh chờ: chừa sẵn chỗ cho ảnh VĐV / ảnh lab sẽ bổ sung.
// Có nhãn rõ ràng để không bị hiểu nhầm là ảnh lỗi.
export default function PhotoSlot({
  label,
  className = '',
  tone = 'arena',
}: {
  label: string
  className?: string
  tone?: 'arena' | 'canvas'
}) {
  const isArena = tone === 'arena'
  return (
    <figure
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[6px] p-6 text-center ${
        isArena ? 'bg-arena-lift text-arena-mute' : 'bg-canvas-deep text-canvas-mute'
      } ${className}`}
      style={{
        backgroundImage: isArena
          ? 'repeating-linear-gradient(135deg, rgb(255 255 255 / 0.025) 0 10px, transparent 10px 20px)'
          : 'repeating-linear-gradient(135deg, rgb(0 0 0 / 0.035) 0 10px, transparent 10px 20px)',
      }}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-3 rounded-[4px] border-[3px] border-dashed ${isArena ? 'border-white/10' : 'border-black/10'}`}
      />
      <CameraIcon className="relative w-7 h-7" />
      <figcaption className="relative">
        <span className="placard block text-sm">Ảnh sắp có</span>
        <span className="mt-1 block text-sm">{label}</span>
      </figcaption>
    </figure>
  )
}
