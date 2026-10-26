// Xuất ảnh gốc (Z:\TGG) sang public/photos + sinh data/photos.ts (kích thước + blur placeholder).
// Chạy: node scripts/export-photos.mjs   (ghi đè ảnh đã có: thêm --force)
// Thêm ảnh mới: khai báo trong data/photo-manifest.json rồi chạy lại script.
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const root = process.cwd()
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/photo-manifest.json'), 'utf8'))
const outDir = path.join(root, 'public/photos')
const force = process.argv.includes('--force')
fs.mkdirSync(outDir, { recursive: true })

const entries = []
for (const p of manifest.photos) {
  const src = path.join(manifest.sourceRoot, p.src)
  const out = path.join(outDir, `${p.id}.jpg`)
  if (force || !fs.existsSync(out)) {
    await sharp(src, { failOn: 'none' })
      .rotate()
      .resize({ width: p.width ?? 1800, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .withMetadata({ exif: { IFD0: { ImageDescription: `The Guard Guy studio photo · source ${p.src}` } } })
      .toFile(out)
  }
  const meta = await sharp(out).metadata()
  const blur = await sharp(out).resize(16).jpeg({ quality: 50 }).toBuffer()
  entries.push({
    id: p.id,
    src: `/photos/${p.id}.jpg`,
    width: meta.width,
    height: meta.height,
    blurDataURL: `data:image/jpeg;base64,${blur.toString('base64')}`,
    kind: p.kind,
    lettering: p.lettering ?? '',
    color: p.color ?? '',
    alt: p.alt,
  })
  console.log('✓', p.id, `${meta.width}x${meta.height}`)
}

const ts = `// Tự sinh bởi scripts/export-photos.mjs từ data/photo-manifest.json, không sửa tay.
export interface Photo {
  id: string
  src: string
  width: number
  height: number
  blurDataURL: string
  kind: 'guard' | 'lab'
  lettering: string
  color: string
  alt: string
}

export const photos: Photo[] = ${JSON.stringify(entries, null, 2)}

export const photo = (id: string): Photo => {
  const p = photos.find((x) => x.id === id)
  if (!p) throw new Error(\`Unknown photo: \${id}\`)
  return p
}
`
fs.writeFileSync(path.join(root, 'data/photos.ts'), ts)
console.log(`\n${entries.length} ảnh → public/photos, data/photos.ts`)
