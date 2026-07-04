import MainLayout from "@/components/layout/main-layout";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";


export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
    </MainLayout>
  );
}