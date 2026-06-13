import { NextResponse } from 'next/server'
import { writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

// Tìm số tiếp theo chưa dùng trong public/gallery/
function nextImageNumber(): number {
  const dir = join(process.cwd(), 'public', 'gallery')
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })

  const used = new Set(
    readdirSync(dir)
      .map(f => parseInt(f.replace(/\.[^.]+$/, ''), 10))
      .filter(n => !isNaN(n))
  )
  let n = 1
  while (used.has(n)) n++
  return n
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const files    = formData.getAll('files') as File[]

    if (!files.length) {
      return NextResponse.json({ error: 'Không có file' }, { status: 400 })
    }

    const galleryDir = join(process.cwd(), 'public', 'gallery')
    if (!existsSync(galleryDir)) mkdirSync(galleryDir, { recursive: true })

    const saved: { num: number; url: string; originalName: string }[] = []

    for (const file of files) {
      const num  = nextImageNumber()  // gọi mỗi lần để số không trùng
      const ext  = file.name.includes('.') ? file.name.split('.').pop()! : 'jpg'
      const name = `${num}.${ext}`
      const path = join(galleryDir, name)

      const buffer = Buffer.from(await file.arrayBuffer())
      writeFileSync(path, buffer)

      saved.push({ num, url: `/gallery/${name}`, originalName: file.name })
    }

    return NextResponse.json({ ok: true, saved })
  } catch (error) {
    console.error('[Admin] upload-image error:', error)
    return NextResponse.json({ error: 'Upload thất bại' }, { status: 500 })
  }
}
