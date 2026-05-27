import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import NewsSection from '@/components/sections/NewsSection';
import StorySection from '@/components/sections/StorySection';
import CreditsSection from '@/components/sections/CreditsSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroductionSection />
      <NewsSection />
      <StorySection />
      <CreditsSection />
      <FooterSection />
    </main>
  );
}
