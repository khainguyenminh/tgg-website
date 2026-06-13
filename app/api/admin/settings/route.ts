import { NextResponse } from 'next/server'
import { writeFileSync } from 'fs'
import { join } from 'path'
import settingsData from '@/data/gallery-settings.json'

export async function GET() {
  return NextResponse.json(settingsData)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const filePath = join(process.cwd(), 'data', 'gallery-settings.json')
    writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8')
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[Admin] save-settings error:', error)
    return NextResponse.json({ error: 'Ghi file thất bại' }, { status: 500 })
  }
}
