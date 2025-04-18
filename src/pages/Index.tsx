
import { Hero } from "@/components/ui/hero";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { DemoSites } from "@/components/sections/demo-sites";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { NavigationBar } from "@/components/ui/navigation-bar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      <div className="relative">
        <Hero />
      </div>
      <Services />
      <WhyChooseUs />
      <DemoSites />
      <HowItWorks />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
