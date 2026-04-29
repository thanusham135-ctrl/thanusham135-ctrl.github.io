'use client'
import { FEATURES } from '@/lib/data'
import { useScrollReveal } from '@/lib/hooks'

export default function Features() {
  const ref = useScrollReveal()
  return (
    <section id="features" className="py-24 px-[5vw] bg-white">
      <div ref={ref} className="reveal text-center mb-14">
        <span className="section-label">Features</span>
        <h2 className="section-title mt-3">Everything you need to study smarter</h2>
        <p className="section-sub mx-auto mt-3">
          Built specifically for the demands of engineering — from semester exams to coding assignments.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((f, i) => (
          <FeatureCard key={f.title} feat={f} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}

function FeatureCard({ feat, delay }: { feat: typeof FEATURES[0]; delay: number }) {
  const ref = useScrollReveal(delay)
  return (
    <div ref={ref}
      className="reveal bg-bg border border-gray-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-250 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-soft to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 ${feat.bg}`}>{feat.icon}</div>
      <h3 className="relative font-display font-bold text-base mb-2 text-ink">{feat.title}</h3>
      <p className="relative text-sm text-muted leading-relaxed">{feat.desc}</p>
    </div>
  )
}
