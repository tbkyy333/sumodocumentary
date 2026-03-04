import HeroSection from '@/components/sections/HeroSection';
import NewsSection from '@/components/sections/NewsSection';
import StorySection from '@/components/sections/StorySection';
import HistorySection from '@/components/sections/HistorySection';
import MembersSection from '@/components/sections/MembersSection';
import StaffSection from '@/components/sections/StaffSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewsSection />
      <StorySection />
      <HistorySection />
      <MembersSection />
      <StaffSection />
      <FooterSection />
    </main>
  );
}
