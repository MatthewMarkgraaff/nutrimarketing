import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FitnessPlannerSection from '@/components/FitnessPlannerSection';
import FeaturesSection from '@/components/FeaturesSection';
import PlanSection from '@/components/PlanSection';
import BenefitsSection from '@/components/BenefitsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FitnessPlannerSection />
      <FeaturesSection />
      <PlanSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
