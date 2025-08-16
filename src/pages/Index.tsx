import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PracticeAreas } from "@/components/PracticeAreas";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PracticeAreas />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
