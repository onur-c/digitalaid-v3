import { cn } from "@/lib/utils";
import React from "react";
import HeroSection from "./HeroSection";
import ReferanslarSection from "./ReferanslarSection";
import AboutSection from "./AboutSection";
import CommentsSection from "./CommentsSection";

const HomepageContainer = () => {
  return (
    <main className={cn("w-full")}>
      <HeroSection />
      <ReferanslarSection />
      <AboutSection />
      <CommentsSection />
    </main>
  );
};

export default HomepageContainer;
