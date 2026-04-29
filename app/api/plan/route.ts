import { NextResponse } from 'next/server'
import { DEMO_TASKS, DEMO_SUBJECTS } from '@/lib/data'

export async function GET() {
  return NextResponse.json({
    tasks: DEMO_TASKS,
    subjects: DEMO_SUBJECTS,
    streak: 12,
    weeklyCompletion: 74,
    weakTopic: 'ODE',
  })
}
