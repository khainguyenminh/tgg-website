/**
 * TGG Gallery — Bulk Upload Script
 * Upload tất cả ảnh từ public/gallery/ lên Cloudinary với group tags tự động.
 *
 * Chạy: node scripts/upload-to-cloudinary.mjs
 *
 * Yêu cầu trước khi chạy:
 * 1. Đã tạo file .env.local với CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
 * 2. Ảnh nằm ở public/gallery/ (tên file: 3.jpg, 4.jpg, ... 174.jpg)
 * 3. npm install cloudinary dotenv (nếu chưa có)
 */

import { v2 as cloudinary } from 'cloudinary'
import { config } from 'dotenv'
import { readFileSync, existsSync } from 'fs'
import { resolve, join } from 'path'

// Load .env.local
config({ path: resolve(process.cwd(), '.env.local') })

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// ── Group data từ data/gallery.ts (copy thủ công ở đây để script standalone) ─

const productGroups = [
  { id:  1, images: [3, 4, 5] },
  { id:  2, images: [6, 7, 8] },
  { id:  3, images: [9, 10, 11] },
  { id:  4, images: [12, 13, 14, 15] },
  { id:  5, images: [16, 17, 18] },
  { id:  6, images: [19, 20, 21] },
  { id:  7, images: [22, 23, 24] },
  { id:  8, images: [25, 26, 27] },
  { id:  9, images: [28, 29, 30] },
  { id: 10, images: [31, 32, 33] },
  { id: 11, images: [34, 35, 36] },
  { id: 12, images: [37, 38, 39] },
  { id: 13, images: [40, 41, 42] },
  { id: 14, images: [43, 44, 45] },
  { id: 15, images: [46, 47, 48] },
  { id: 16, images: [49, 50, 51] },
  { id: 17, images: [52, 53, 54] },
  { id: 18, images: [55, 56, 57] },
  { id: 19, images: [58, 59, 60] },
  { id: 20, images: [61, 62] },
  { id: 21, images: [63, 64, 65, 66] },
  { id: 22, images: [67, 68, 69] },
  { id: 23, images: [70, 71, 72] },
  { id: 24, images: [73, 74, 75] },
  { id: 25, images: [76, 77, 78] },
  { id: 26, images: [79, 80, 81] },
  { id: 27, images: [82, 83, 84] },
  { id: 28, images: [85, 86, 87] },
  { id: 29, images: [88, 89, 90] },
  { id: 30, images: [91, 92, 93] },
  { id: 31, images: [94, 95, 96] },
  { id: 32, images: [97, 98, 99] },
  { id: 33, images: [100, 101, 102] },
  { id: 34, images: [103, 104, 105] },
  { id: 35, images: [106, 107, 108] },
  { id: 36, images: [109, 110, 111] },
  { id: 37, images: [112, 113, 114] },
  { id: 38, images: [115, 116, 117] },
  { id: 39, images: [118, 119, 120] },
  { id: 40, images: [121, 122, 123] },
  { id: 41, images: [124, 125, 126] },
  { id: 42, images: [127, 128, 129] },
  { id: 43, images: [130, 131, 132] },
  { id: 44, images: [133, 134, 135] },
  { id: 45, images: [136, 137, 138] },
  { id: 46, images: [139, 140, 141] },
  { id: 47, images: [142, 143, 144] },
  { id: 48, images: [145, 146, 147] },
  { id: 49, images: [148, 149, 150] },
  { id: 50, images: [151, 152, 153] },
  { id: 51, images: [154, 155, 156] },
  { id: 52, images: [157, 158, 159] },
  { id: 53, images: [160, 161, 162] },
  { id: 54, images: [163, 164, 165] },
  { id: 55, images: [166, 167, 168] },
  { id: 56, images: [169, 170, 171] },
  { id: 57, images: [172, 173, 174] },
]

// ── Build image → groupId map ─────────────────────────────────────────────────

const imageToGroup = new Map()
for (const group of productGroups) {
  for (const imgNum of group.images) {
    imageToGroup.set(imgNum, group.id)
  }
}

// ── Upload ────────────────────────────────────────────────────────────────────

async function uploadImage(imgNum) {
  const filePath = join(process.cwd(), 'public', 'gallery', `${imgNum}.jpg`)

  if (!existsSync(filePath)) {
    console.warn(`  ⚠️  File không tồn tại: ${filePath}`)
    return null
  }

  const groupId = imageToGroup.get(imgNum)
  const tags    = ['tgg-gallery', `group-${groupId}`]

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder:    'tgg-gallery',
      public_id: `tgg-${imgNum}`,
      tags,
      overwrite: false,   // bỏ qua nếu đã upload rồi
    })
    console.log(`  ✅ ${imgNum}.jpg → group-${groupId}`)
    return result
  } catch (err) {
    if (err.message?.includes('already exists')) {
      console.log(`  ⏭️  ${imgNum}.jpg đã có, bỏ qua`)
      return null
    }
    console.error(`  ❌ ${imgNum}.jpg lỗi:`, err.message)
    return null
  }
}

async function main() {
  console.log('\n🚀 TGG Gallery — Bulk Upload to Cloudinary')
  console.log('==========================================')
  console.log(`Cloud: ${process.env.CLOUDINARY_CLOUD_NAME}\n`)

  // Upload lần lượt, 3 ảnh cùng lúc để tránh rate limit
  const allNums  = [...imageToGroup.keys()].sort((a, b) => a - b)
  const batchSize = 3
  let done = 0

  for (let i = 0; i < allNums.length; i += batchSize) {
    const batch = allNums.slice(i, i + batchSize)
    await Promise.all(batch.map(uploadImage))
    done += batch.length
    console.log(`Progress: ${done}/${allNums.length}`)
  }

  console.log('\n✅ Xong! Vào Cloudinary Dashboard → Media Library → tgg-gallery')
  console.log('   để gắn thêm tag màu (do, xanh-duong...) và combo (base, full-design...) cho từng ảnh.\n')
}

main().catch(console.error)
