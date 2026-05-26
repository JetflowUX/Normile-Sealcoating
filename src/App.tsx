import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { GilsoniteDifference } from "./components/GilsoniteDifference";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
export function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 font-sans selection:bg-brand-orange selection:text-white">
      <Header />

      <main>
        <Hero />
        <GilsoniteDifference />
        <Services />
        <Process />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
