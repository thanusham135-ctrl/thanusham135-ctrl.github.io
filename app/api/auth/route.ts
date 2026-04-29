import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email, password, name } = body as { email: string; password: string; name?: string }

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
  }

  // Mock: in production, hash password & save to DB
  const user = {
    id: crypto.randomUUID(),
    email,
    name: name ?? email.split('@')[0],
    createdAt: new Date().toISOString(),
  }

  return NextResponse.json({ user, token: 'mock-jwt-token' }, { status: 201 })
}
