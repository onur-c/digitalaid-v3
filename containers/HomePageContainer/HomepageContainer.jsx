import { cn } from "@/lib/utils";
import React from "react";
import HeroSection from "./HeroSection";
import ReferanslarSection from "./ReferanslarSection";
import AboutSection from "./AboutSection";
import CommentsSection from "./CommentsSection";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";

const HomepageContainer = () => {
  return (
    <main className={cn("w-full")}>
      <HeroSection />
      <ReferanslarSection />
      <AboutSection />
      <CommentsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
};

export default HomepageContainer;
