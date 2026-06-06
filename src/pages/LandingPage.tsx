import { HeroSection } from '../components/landing/HeroSection';
import { StatsSection } from '../components/landing/StatsSection';
import { SpeakersSection } from '../components/landing/SpeakersSection';
import { EventsSection } from '../components/landing/EventsSection';
import { TimelineSection } from '../components/landing/TimelineSection';
import { Footer } from '../components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection />
      <StatsSection />
      <EventsSection />
      <SpeakersSection />
      <TimelineSection />
      <Footer />
    </div>
  );
}
