'use client'
import { useScrollReveal } from '@/lib/hooks'
import DashboardMock from './DashboardMock'

export default function DashboardSection() {
  const headerRef = useScrollReveal()
  const dashRef = useScrollReveal(150)

  return (
    <section id="dashboard" className="py-24 px-[5vw] bg-white">
      <div ref={headerRef} className="reveal text-center mb-14">
        <span className="section-label">Dashboard Preview</span>
        <h2 className="section-title mt-3">A command center for your studies</h2>
        <p className="section-sub mx-auto mt-3">
          See your schedule, progress, and AI insights — all in one glance. Click tasks to mark them done!
        </p>
      </div>
      <div ref={dashRef} className="reveal max-w-4xl mx-auto">
        <DashboardMock />
      </div>
    </section>
  )
}
