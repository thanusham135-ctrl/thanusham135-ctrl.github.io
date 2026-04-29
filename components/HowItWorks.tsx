'use client'
import { STEPS } from '@/lib/data'
import { useScrollReveal } from '@/lib/hooks'

export default function HowItWorks() {
  const ref = useScrollReveal()
  return (
    <section
      id="how"
      className="py-24 px-[5vw]"
      style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, #ede9fe44 0%, transparent 70%), #f5f4f0' }}
    >
      <div ref={ref} className="reveal text-center mb-14">
        <span className="section-label">How It Works</span>
        <h2 className="section-title mt-3">Three steps to a smarter semester</h2>
        <p className="section-sub mx-auto mt-3">Get your personalized study plan up and running in less than 3 minutes.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6 relative">
        <div className="hidden sm:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-accent to-accent-2 opacity-20" />
        {STEPS.map((s, i) => <StepCard key={s.num} step={s} delay={i * 120} />)}
      </div>
    </section>
  )
}

function StepCard({ step, delay }: { step: typeof STEPS[0]; delay: number }) {
  const ref = useScrollReveal(delay)
  return (
    <div ref={ref} className="reveal bg-white border border-gray-200 rounded-2xl p-8 text-center relative z-10">
      <div className="w-13 h-13 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center mx-auto mb-5 shadow-[0_8px_24px_rgba(79,70,229,.28)]">
        <span className="font-display font-black text-xl text-white">{step.num}</span>
      </div>
      <h3 className="font-display font-bold text-base mb-2.5 text-ink">{step.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
    </div>
  )
}
