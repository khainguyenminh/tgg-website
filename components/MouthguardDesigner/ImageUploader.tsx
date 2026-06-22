'use client'

import { useRef, useState } from 'react'
import { MAX_IMAGES } from './constants'

const MAX_SIZE_BYTES = 10 * 1024 * 1024
const ACCEPTED_TYPES = ['image/png', 'image/jpeg', 'image/webp']

interface ImageUploaderProps {
  count: number
  onUpload: (src: string, width: number, height: number) => void
}

export default function ImageUploader({ count, onUpload }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)
  const limitReached = count >= MAX_IMAGES

  function handleFile(file: File) {
    setError(null)
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError('Chỉ nhận PNG, JPG, WEBP / Only PNG, JPG, WEBP allowed')
      return
    }
    if (file.size > MAX_SIZE_BYTES) {
      setError('Ảnh tối đa 10MB / Max 10MB')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      const src = reader.result as string
      const img = new Image()
      img.onload = () => onUpload(src, img.naturalWidth, img.naturalHeight)
      img.src = src
    }
    reader.readAsDataURL(file)
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_TYPES.join(',')}
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFile(file)
          e.target.value = ''
        }}
      />
      <button
        type="button"
        disabled={limitReached}
        onClick={() => inputRef.current?.click()}
        className="w-full bg-white/5 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed border border-white/10 text-white text-sm font-semibold rounded-lg px-4 py-2.5 transition-all"
      >
        Tải ảnh lên <span className="text-[#94A3B8] font-normal">/ Upload Image</span>
      </button>

      <p className="text-[10px] text-[#94A3B8] mt-1.5">
        {count}/{MAX_IMAGES} ảnh <span className="opacity-70">— Tối đa {MAX_IMAGES} ảnh / Max {MAX_IMAGES} images</span>
      </p>

      {error && <p className="text-xs text-[#D72638] mt-2">{error}</p>}
    </div>
  )
}
