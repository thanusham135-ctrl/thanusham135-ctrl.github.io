export interface Task {
  id: string
  text: string
  subject: string
  tag: string
  done: boolean
  color: string
}

export interface Subject {
  name: string
  progress: number
  color: string
  accent: string
}

export interface Plan {
  tasks: Task[]
  subjects: Subject[]
  streak: number
  weeklyCompletion: number
  weakTopic: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  features: { text: string; included: boolean }[]
  highlighted: boolean
  cta: string
}
