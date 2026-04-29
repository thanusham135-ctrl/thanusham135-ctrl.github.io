'use client'
import { useState, useEffect } from 'react'
import type { Task, Subject } from '@/types'
import { DEMO_TASKS, DEMO_SUBJECTS } from '@/lib/data'

export default function DashboardMock() {
  const [tasks, setTasks] = useState<Task[]>(DEMO_TASKS)
  const [subjects] = useState<Subject[]>(DEMO_SUBJECTS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/plan')
      .then(r => r.json())
      .then(d => { setTasks(d.tasks); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const toggle = async (id: string) => {
    const task = tasks.find(t => t.id === id)
    if (!task) return
    const newDone = !task.done
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: newDone } : t))
    await fetch('/api/tasks', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, done: newDone }),
    })
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden text-left">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-accent to-accent-2 px-5 py-3.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          {['#fc5c65','#fed330','#26de81'].map(c => (
            <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <span className="ml-auto text-white/80 text-xs font-semibold tracking-widest uppercase">StudySphere Dashboard</span>
      </div>

      <div className="grid md:grid-cols-[200px_1fr]">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col gap-1 p-4 border-r border-gray-100 bg-gray-50/60">
          {[
            { icon: '▦', label: 'Dashboard', active: true },
            { icon: '📅', label: 'Schedule', active: false },
            { icon: '✅', label: 'Tasks', active: false },
            { icon: '📚', label: 'Subjects', active: false },
            { icon: '📈', label: 'Analytics', active: false },
          ].map(item => (
            <div key={item.label}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium cursor-pointer transition-colors
                ${item.active ? 'bg-accent-soft text-accent' : 'text-muted hover:bg-gray-100'}`}
            >
              <span className="text-base">{item.icon}</span> {item.label}
            </div>
          ))}
        </aside>

        {/* Main */}
        <div className="p-5 flex flex-col gap-4">
          <p className="font-display font-bold text-lg text-ink">
            Good morning, <span className="text-accent">Arjun</span> 👋 — 3 tasks due today
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Study Streak', val: '12', sub: 'days 🔥', col: 'text-accent' },
              { label: 'Completed', val: '74%', sub: 'of weekly plan', col: 'text-teal' },
              { label: 'Weak Topic', val: 'ODE', sub: 'Review suggested', col: 'text-amber' },
            ].map(s => (
              <div key={s.label} className="bg-bg rounded-xl p-3 border border-gray-200">
                <p className="text-[10px] text-muted font-semibold mb-1 uppercase tracking-wider">{s.label}</p>
                <p className={`font-display font-black text-2xl ${s.col}`}>{s.val}</p>
                <p className="text-[11px] text-muted">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Tasks */}
          <div>
            <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-2">Today's Tasks</p>
            {loading
              ? <p className="text-xs text-muted animate-pulse">Loading tasks…</p>
              : tasks.map(task => (
                <div key={task.id}
                  className="flex items-center gap-3 px-3 py-2 bg-bg rounded-xl border border-gray-200 mb-2 cursor-pointer hover:border-accent/30 transition-colors"
                  onClick={() => toggle(task.id)}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                    ${task.done ? 'bg-teal border-teal' : 'border-gray-300'}`}>
                    {task.done && <span className="text-white text-[10px] font-bold">✓</span>}
                  </div>
                  <span className={`flex-1 text-sm font-medium ${task.done ? 'line-through text-muted' : 'text-ink'}`}>
                    {task.text}
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${task.color}`}>
                    {task.tag}
                  </span>
                </div>
              ))
            }
          </div>

          {/* Progress bars */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            {subjects.map(s => (
              <div key={s.name}>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-ink">{s.name}</span>
                  <span style={{ color: s.accent }}>{s.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${s.color} rounded-full transition-all duration-700`}
                    style={{ width: `${s.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
