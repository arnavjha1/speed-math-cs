import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LevelLadder from "@/components/LevelLadder";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LevelLadder />
      <SponsorsSection />
      <Footer />
    </div>
  );
};

export default Index;
