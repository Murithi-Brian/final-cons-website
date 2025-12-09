import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { WhoWeServeSection } from "@/components/who-we-serve-section"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "FAFS | Fair Agri-Food Systems",
  description:
    "FAFS is an impact enterprise committed to transforming food systems into fair, inclusive, and sustainable ecosystems.",
}

export default function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="what-we-do">
        <WhatWeDoSection />
      </section>
      <section id="who-we-serve">
        <WhoWeServeSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  )
}
