"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { MagicCursor } from "@/components/effects/MagicCursor";
import { FloatingTechIcons } from "@/components/effects/FloatingTechIcons";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Trajectory } from "@/components/sections/Trajectory";
import { Projects } from "@/components/sections/Projects";
// import { Research } from "@/components/sections/Research"; // enable later
import { Certificates } from "@/components/sections/Certificates";
// import { Testimonials } from "@/components/sections/Testimonials"; // enable later
import { Contact } from "@/components/sections/Contact";

export function HomePage() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setBooted(true)} />
      <MagicCursor />
      {booted && <FloatingTechIcons density="page" />}
      <div
        className={
          booted
            ? "relative z-[2] opacity-100 transition-opacity duration-700"
            : "opacity-0"
        }
      >
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <About />
          <Skills />
          <Trajectory />
          <Projects />
          {/* <Research /> — re-enable when research paper section is ready */}
          <Certificates />
          {/* <Testimonials /> — re-enable when endorsements are ready */}
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
