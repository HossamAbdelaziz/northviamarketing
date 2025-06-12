import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints';
import PackagesSection from '@/components/PackagesSection';
import HowItWorks from '@/components/HowItWorks';
import AboutAndClient from '@/components/AboutAndClient';
import ContactSection from '@/components/ContactSection';



export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <PackagesSection />
      <HowItWorks />
      <AboutAndClient />
      <ContactSection />


    </main>
  )
}
