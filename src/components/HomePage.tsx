"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Trajectory } from "@/components/sections/Trajectory";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export function HomePage() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setBooted(true)} />
      <div
        className={
          booted
            ? "opacity-100 transition-opacity duration-700"
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
          <Certificates />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
