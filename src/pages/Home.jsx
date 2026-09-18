import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import MissionSection from "../components/MissionSection";
import VisionSection from "../components/VisionSection";
import EventsSection from "../components/EventsSection";
import GalleryPreview from "../components/GalleryPreview";
import TestimonialsSection from "../components/TestimonialsSection";
// import PrayerSection from "../components/PrayerSection";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MissionSection />
      <VisionSection />
      <EventsSection />
      <GalleryPreview />
      <TestimonialsSection />
      {/* <PrayerSection /> */}
    </>
  );
}

export default Home;