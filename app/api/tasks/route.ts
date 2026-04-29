import { NextRequest, NextResponse } from 'next/server'

// In a real app this would hit a database.
// For demo we just echo back the toggled state.
export async function PATCH(req: NextRequest) {
  const body = await req.json()
  const { id, done } = body as { id: string; done: boolean }

  if (!id) {
    return NextResponse.json({ error: 'Missing task id' }, { status: 400 })
  }

  return NextResponse.json({ id, done, updatedAt: new Date().toISOString() })
}
