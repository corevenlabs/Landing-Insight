import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import { TopicsSection, RibbonSection, FaqSection, ContactSection } from '../components/sections/SupportSections';

export default function SupportView() {
  return <>
    <Navbar />
    <main>
      <HeroSection />
      <TopicsSection />
      <RibbonSection />
      <FaqSection />
      <ContactSection />
    </main>
    <Footer />
  </>;
}
