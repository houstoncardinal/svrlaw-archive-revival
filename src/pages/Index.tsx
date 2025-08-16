import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryHero } from "@/components/LuxuryHero";
import { LuxuryPracticeAreas } from "@/components/LuxuryPracticeAreas";
import { TestimonialsResults } from "@/components/TestimonialsResults";
import { LuxuryFAQ } from "@/components/LuxuryFAQ";
import { LuxuryContact } from "@/components/LuxuryContact";
import { LuxuryFooter } from "@/components/LuxuryFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-black">
      <LuxuryHeader />
      <LuxuryHero />
      <LuxuryPracticeAreas />
      <TestimonialsResults />
      <LuxuryFAQ />
      <LuxuryContact />
      <LuxuryFooter />
    </div>
  );
};

export default Index;
