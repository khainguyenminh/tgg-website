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
        className="arena-pad w-full !min-h-12 !text-base"
      >
        Tải ảnh lên <span className="normal-case opacity-70">/ Upload</span>
      </button>

      <p className="mt-2 text-sm text-arena-mute">
        {count}/{MAX_IMAGES} ảnh <span className="opacity-80">· tối đa {MAX_IMAGES} ảnh / Max {MAX_IMAGES} images</span>
      </p>

      {error && <p role="alert" className="mt-2 text-sm text-alert-dark">{error}</p>}
    </div>
  )
}
