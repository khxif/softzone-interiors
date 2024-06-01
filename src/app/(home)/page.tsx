import AwardsSection from "@/components/sections/AwardsSection";
import HomeHero from "@/components/sections/HomeHero";
import HomeSection1 from "@/components/sections/HomeSection1";
import HomeSection2 from "@/components/sections/HomeSection2";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeSection1 />
      <HomeSection2 />
      <AwardsSection />
    </main>
  );
}
