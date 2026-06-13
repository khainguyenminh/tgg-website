import { NextResponse } from 'next/server'
import { writeFileSync, unlinkSync, existsSync, readFileSync } from 'fs'
import { join } from 'path'

// POST body: { action: 'delete-group', groupId: string }
export async function POST(request: Request) {
  try {
    const body     = await request.json()
    const { action, groupId } = body as { action: string; groupId: string }

    if (action === 'delete-group') {
      const groupsPath = join(process.cwd(), 'data', 'gallery-groups.json')
      const tagsPath   = join(process.cwd(), 'data', 'gallery-tags.json')
      const galleryDir = join(process.cwd(), 'public', 'gallery')

      const groups = JSON.parse(readFileSync(groupsPath, 'utf-8')) as Record<string, number[]>
      const tags   = JSON.parse(readFileSync(tagsPath,   'utf-8')) as Record<string, unknown>

      const imageNums: number[] = groups[groupId] ?? []

      // Xoá file vật lý
      for (const num of imageNums) {
        for (const ext of ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'WEBP']) {
          const filePath = join(galleryDir, `${num}.${ext}`)
          if (existsSync(filePath)) { unlinkSync(filePath); break }
        }
      }

      // Xoá khỏi JSON
      delete groups[groupId]
      delete tags[groupId]

      writeFileSync(groupsPath, JSON.stringify(groups, null, 2), 'utf-8')
      writeFileSync(tagsPath,   JSON.stringify(tags,   null, 2), 'utf-8')

      return NextResponse.json({ ok: true, deleted: imageNums.length })
    }

    // Xoá 1 file ảnh đơn (không cần xoá khỏi group, client đã xử lý state)
    if (action === 'delete-file') {
      const { imageNum } = body as { imageNum: number }
      const galleryDir   = join(process.cwd(), 'public', 'gallery')
      let deleted = false
      for (const ext of ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'WEBP']) {
        const filePath = join(galleryDir, `${imageNum}.${ext}`)
        if (existsSync(filePath)) { unlinkSync(filePath); deleted = true; break }
      }
      return NextResponse.json({ ok: true, deleted })
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  } catch (error) {
    console.error('[Admin] delete error:', error)
    return NextResponse.json({ error: 'Xoá thất bại' }, { status: 500 })
  }
}
