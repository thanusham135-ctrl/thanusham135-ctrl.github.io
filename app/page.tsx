import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import DashboardSection from '@/components/DashboardSection'
import Benefits from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <DashboardSection />
        <Benefits />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
