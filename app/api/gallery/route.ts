import { NextResponse } from 'next/server'
import groupsData from '@/data/gallery-groups.json'
import tagsData   from '@/data/gallery-tags.json'

export async function GET() {
  const groups = groupsData as Record<string, number[]>
  const tags   = tagsData   as Record<string, { color?: string; combo?: string }>

  const resources = Object.entries(groups).flatMap(([groupId, images]) => {
    const t = tags[groupId] ?? {}
    const tagList = [
      'tgg-gallery',
      `group-${groupId}`,
      ...(t.color ? [t.color] : []),
      ...(t.combo ? [t.combo] : []),
    ]
    return images.map((imgNum) => ({
      public_id: `tgg-${imgNum}`,
      secure_url: `/gallery/${imgNum}.jpg`,
      tags: tagList,
    }))
  })

  return NextResponse.json(resources, {
    headers: { 'Cache-Control': 'no-store' },
  })
}
