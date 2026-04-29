'use client'
import { PRICING_PLANS } from '@/lib/data'
import { useScrollReveal } from '@/lib/hooks'

export default function Pricing() {
  const ref = useScrollReveal()
  return (
    <section id="pricing" className="py-24 px-[5vw] bg-bg">
      <div ref={ref} className="reveal text-center mb-14">
        <span className="section-label">Pricing</span>
        <h2 className="section-title mt-3">Simple, student-friendly pricing</h2>
        <p className="section-sub mx-auto mt-3">Start free, upgrade when you need more power.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {PRICING_PLANS.map((plan, i) => <PriceCard key={plan.name} plan={plan} delay={i * 100} />)}
      </div>
    </section>
  )
}

function PriceCard({ plan, delay }: { plan: typeof PRICING_PLANS[0]; delay: number }) {
  const ref = useScrollReveal(delay)
  return (
    <div ref={ref}
      className={`reveal relative rounded-2xl p-9 border transition-all duration-250 hover:-translate-y-1
        ${plan.highlighted
          ? 'border-accent bg-gradient-to-b from-[#eef0fb] to-white shadow-[0_4px_24px_rgba(79,70,229,.10)]'
          : 'border-gray-200 bg-white hover:shadow-lg'
        }`}
    >
      {plan.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-accent-2 text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full whitespace-nowrap">
          Most Popular
        </div>
      )}
      <p className="text-xs font-bold text-muted uppercase tracking-widest">{plan.name}</p>
      <p className="font-display font-black text-5xl tracking-tight mt-2">
        {plan.price} <span className="text-base font-medium text-muted">/ mo</span>
      </p>
      <p className="text-sm text-muted mt-1 mb-6">{plan.period}</p>
      <ul className="flex flex-col gap-2.5 mb-8">
        {plan.features.map(f => (
          <li key={f.text} className={`flex items-center gap-2.5 text-sm ${f.included ? 'text-muted' : 'text-gray-300'}`}>
            <span className={f.included ? 'text-teal' : 'text-gray-300'}>
              {f.included ? '✓' : '✗'}
            </span>
            {f.text}
          </li>
        ))}
      </ul>
      <a href="#"
        className={`block text-center w-full py-3 rounded-full text-sm font-semibold transition-all
          ${plan.highlighted
            ? 'bg-gradient-to-r from-accent to-accent-2 text-white shadow-[0_4px_16px_rgba(79,70,229,.30)] hover:shadow-[0_8px_24px_rgba(79,70,229,.38)] hover:-translate-y-0.5'
            : 'border-2 border-accent text-accent hover:bg-accent-soft'
          }`}
      >
        {plan.cta}
      </a>
    </div>
  )
}
