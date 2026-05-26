import React from "react";
import { FadeIn } from "./ui/FadeIn";
export function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1584464457692-73ec4d7d3324?q=80&w=800&auto=format&fit=crop",
      caption: "Maple Drive — Summer 2025",
    },
    {
      url: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?q=80&w=800&auto=format&fit=crop",
      caption: "Oak Street — Fall 2025",
    },
    {
      url: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800&auto=format&fit=crop",
      caption: "Pine Court — Spring 2026",
    },
    {
      url: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=800&auto=format&fit=crop",
      caption: "Cedar Lane — Summer 2025",
    },
    {
      url: "https://images.unsplash.com/photo-1518481852452-9415b262eba4?q=80&w=800&auto=format&fit=crop",
      caption: "Elm Avenue — Fall 2025",
    },
    {
      url: "https://images.unsplash.com/photo-1584464457692-73ec4d7d3324?q=80&w=800&auto=format&fit=crop",
      caption: "Birch Way — Spring 2026",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-3">
            Our Work
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-asphalt uppercase leading-tight mb-6">
            The Gilsonite Finish
          </h3>
          <p className="text-gray-600 text-lg">
            Notice the deep, rich black finish. That's the result of hot oil
            gilsonite penetrating the asphalt, not just sitting on top.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {images.map((img, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative overflow-hidden bg-brand-asphalt">
                <img
                  src={img.url}
                  alt={`Sealcoated driveway at ${img.caption}`}
                  className="w-full h-60 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-white font-heading font-semibold tracking-wide uppercase text-sm">
                    {img.caption}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
