'use client'
import { useEffect, useRef } from 'react'
import DashboardMock from './DashboardMock'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (el) setTimeout(() => el.classList.add('visible'), 400)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center pt-28 pb-16 px-[5vw] relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 0%, #ddd8f8 0%, transparent 70%),
          radial-gradient(ellipse 60% 40% at 80% 80%, #d1faf5 0%, transparent 60%),
          #f5f4f0
        `,
      }}
    >
      {/* Orbs */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-violet-200 -top-24 -left-28 blur-[60px] opacity-50 animate-float pointer-events-none" />
      <div className="absolute w-[320px] h-[320px] rounded-full bg-teal-200 -bottom-20 -right-20 blur-[60px] opacity-50 animate-float-2 pointer-events-none" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-accent mb-7 shadow-sm animate-fade-up">
        <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
        Now in Beta — Free for students
      </div>

      {/* Headline */}
      <h1
        className="font-display font-black tracking-tight leading-[1.1] max-w-4xl animate-fade-up"
        style={{
          fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
          animationDelay: '0.1s',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 50%, #7c3aed 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Your AI Study Planner for Engineering Success
      </h1>

      {/* Sub */}
      <p
        className="max-w-xl text-muted text-lg mt-6 mb-9 leading-relaxed animate-fade-up"
        style={{ animationDelay: '0.2s' }}
      >
        StudySphere uses AI to build a personalized study schedule around your subjects, syllabus, and
        deadlines — then adapts as you learn, so you always stay on track.
      </p>

      {/* CTA */}
      <div
        className="flex gap-4 flex-wrap justify-center animate-fade-up"
        style={{ animationDelay: '0.3s' }}
      >
        <a href="#" className="btn-primary btn-lg">🚀 Get Started Free</a>
        <a href="#dashboard" className="btn-outline btn-lg">Try Demo</a>
      </div>

      {/* Dashboard preview */}
      <div ref={ref} className="reveal mt-20 w-full max-w-4xl">
        <DashboardMock />
      </div>
    </section>
  )
}
