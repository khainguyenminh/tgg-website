// Bộ icon dùng chung: nét 2px, đầu bo tròn, 24×24
type IconProps = { className?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function ZaloIcon({ className = 'w-5 h-5' }: IconProps) {
  // Bong bóng chat có chữ Z — nhận diện Zalo, vẽ bằng một nét
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M12 3.5c5 0 9 3.4 9 7.6s-4 7.6-9 7.6c-1 0-2-.1-2.9-.4L5 20l.9-3.6C4.1 15 3 13.2 3 11.1 3 6.9 7 3.5 12 3.5Z" />
      <path d="M9 8.6h5.2L9 13.6h5.4" />
    </svg>
  )
}

export function ArrowIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function PlusIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}

export function CameraIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M4 8h3l1.6-2.4h6.8L17 8h3v11H4Z" />
      <circle cx="12" cy="13.2" r="3.4" />
    </svg>
  )
}

export function InstagramIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </svg>
  )
}

export function FacebookIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4A20 20 0 0 0 15.3 4c-2.3 0-3.8 1.4-3.8 3.9v2.6H9v3h2.5V21" />
    </svg>
  )
}

export function TikTokIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M14 3.5v11.2a3.8 3.8 0 1 1-3.8-3.8" />
      <path d="M14 3.5c.4 2.6 2.3 4.4 5 4.6" />
    </svg>
  )
}
