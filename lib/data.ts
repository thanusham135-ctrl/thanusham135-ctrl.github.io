import type { Task, Subject, PricingPlan } from '@/types'

export const DEMO_TASKS: Task[] = [
  { id: '1', text: 'Revise Integration — Chapter 5', subject: 'Maths', tag: 'Math', done: true, color: 'bg-accent-soft text-accent' },
  { id: '2', text: 'Linked Lists implementation', subject: 'DSA', tag: 'DSA', done: false, color: 'bg-teal-soft text-teal' },
  { id: '3', text: 'Thermodynamics PYQ practice', subject: 'Physics', tag: 'Phy', done: false, color: 'bg-amber-soft text-amber' },
  { id: '4', text: 'DBMS assignment submission', subject: 'DBMS', tag: 'DB', done: false, color: 'bg-rose-soft text-rose' },
]

export const DEMO_SUBJECTS: Subject[] = [
  { name: 'Mathematics', progress: 68, color: 'from-accent to-accent-2', accent: '#4f46e5' },
  { name: 'DSA / Coding', progress: 82, color: 'from-teal to-emerald-400', accent: '#0d9488' },
  { name: 'Physics', progress: 45, color: 'from-amber to-yellow-400', accent: '#d97706' },
  { name: 'DBMS', progress: 59, color: 'from-rose to-pink-400', accent: '#db2777' },
]

export const FEATURES = [
  { icon: '🧠', title: 'Smart AI Timetable Generator', desc: 'Enter your subjects, weightage, and exam dates. Our AI creates a balanced, achievable study plan tailored just for you.', bg: 'bg-accent-soft' },
  { icon: '✅', title: 'Daily Task Tracking', desc: 'Mark topics as done, track your daily targets, and maintain a study streak that keeps you motivated every day.', bg: 'bg-teal-soft' },
  { icon: '📊', title: 'Weak Topic Analysis', desc: 'AI identifies subjects where you\'re underperforming and automatically boosts their priority in your schedule.', bg: 'bg-rose-soft' },
  { icon: '🔄', title: 'Adaptive Rescheduling', desc: 'Missed a session? StudySphere automatically redistributes your plan without leaving any topic behind.', bg: 'bg-amber-soft' },
  { icon: '💻', title: 'Coding & Assignment Tracking', desc: 'Track LeetCode progress, lab assignments, and project deadlines — all in one unified dashboard.', bg: 'bg-emerald-50' },
  { icon: '📅', title: 'Exam Countdown & PYQ Focus', desc: 'As your exam approaches, the AI shifts focus to high-priority topics and previous year question patterns.', bg: 'bg-sky-50' },
]

export const STEPS = [
  { num: 1, title: 'Enter Your Syllabus', desc: 'Add subjects, chapters, exam dates, and deadlines. Tell us where you\'re strong and where you need more work.' },
  { num: 2, title: 'AI Builds Your Plan', desc: 'Our AI generates a personalized, balanced study timetable structured by day, topic, and priority level.' },
  { num: 3, title: 'Track & Improve', desc: 'Follow your daily schedule, mark tasks complete, and let StudySphere adapt your plan as your progress evolves.' },
]

export const BENEFITS = [
  { icon: '⏱️', title: 'Saves Time', desc: 'Stop spending hours figuring out what to study next. Your optimized plan is ready from day one.' },
  { icon: '😌', title: 'Reduces Stress', desc: 'A clear, structured plan eliminates last-minute panic. Study with confidence, not anxiety.' },
  { icon: '📈', title: 'Improves Consistency', desc: 'Daily targets and streak tracking keep you showing up every day — even when motivation dips.' },
  { icon: '🎯', title: 'Better Exam Prep', desc: 'AI knows which topics need more revision before exams and adjusts your schedule automatically.' },
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    price: '₹0',
    period: 'Forever free for students',
    highlighted: false,
    cta: 'Get Started Free',
    features: [
      { text: 'Up to 4 subjects', included: true },
      { text: 'AI study plan generator', included: true },
      { text: 'Daily task tracking', included: true },
      { text: '7-day progress history', included: true },
      { text: 'Weak topic analytics', included: false },
      { text: 'Adaptive rescheduling', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '₹149',
    period: 'per month · Cancel anytime',
    highlighted: true,
    cta: 'Upgrade to Premium',
    features: [
      { text: 'Unlimited subjects', included: true },
      { text: 'AI study plan generator', included: true },
      { text: 'Daily task tracking', included: true },
      { text: 'Full progress analytics', included: true },
      { text: 'Weak topic AI analysis', included: true },
      { text: 'Adaptive rescheduling', included: true },
    ],
  },
]
