import { NextResponse } from "next/server"

let fakeDB = {}

export async function GET(request, { params }) {
  const slug = params.slug
  const count = fakeDB[slug] || 0
  return NextResponse.json({ count })
}

export async function POST(request, { params }) {
  const slug = params.slug
  fakeDB[slug] = (fakeDB[slug] || 0) + 1
  return NextResponse.json({ count: fakeDB[slug] })
}
