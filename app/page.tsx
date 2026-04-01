import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AboutSection from '@/components/sections/AboutSection';
import CtaSection from '@/components/sections/CtaSection';
import FaqSection from '@/components/sections/FaqSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TrustBar from '@/components/sections/TrustBar';

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustBar />
      <FeaturesSection />
      <HowItWorksSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
