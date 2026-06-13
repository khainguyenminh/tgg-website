import { NextResponse } from 'next/server'
import { writeFileSync } from 'fs'
import { join } from 'path'

// Body: { "1": [3, 4, 5], "2": [6, 7, 8], ... }
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const filePath = join(process.cwd(), 'data', 'gallery-groups.json')
    writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8')
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[Admin] save-groups error:', error)
    return NextResponse.json({ error: 'Ghi file thất bại' }, { status: 500 })
  }
}
