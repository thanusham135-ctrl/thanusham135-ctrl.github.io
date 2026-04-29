'use client'
import { BENEFITS } from '@/lib/data'
import { useScrollReveal } from '@/lib/hooks'

export default function Benefits() {
  const ref = useScrollReveal()
  return (
    <section
      id="benefits"
      className="py-24 px-[5vw]"
      style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }}
    >
      <div ref={ref} className="reveal text-center mb-14">
        <span className="inline-block text-xs font-bold tracking-widest uppercase bg-white/10 text-white px-4 py-1.5 rounded-full mb-4">
          Benefits
        </span>
        <h2 className="font-display font-black text-white tracking-tight leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
          Why students love StudySphere
        </h2>
        <p className="text-white/60 max-w-lg mx-auto mt-3 text-base leading-relaxed">
          Designed to remove the chaos from studying and replace it with calm, structured progress.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {BENEFITS.map((b, i) => <BenefitCard key={b.title} benefit={b} delay={i * 80} />)}
      </div>
    </section>
  )
}

function BenefitCard({ benefit, delay }: { benefit: typeof BENEFITS[0]; delay: number }) {
  const ref = useScrollReveal(delay)
  return (
    <div ref={ref}
      className="reveal bg-white/7 border border-white/12 rounded-2xl p-7 hover:bg-white/12 transition-colors duration-250"
    >
      <div className="text-4xl mb-4">{benefit.icon}</div>
      <h3 className="font-display font-bold text-white text-base mb-2">{benefit.title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{benefit.desc}</p>
    </div>
  )
}
