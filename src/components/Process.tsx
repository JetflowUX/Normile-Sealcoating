import React from "react";
import { ClipboardCheck, Wind, Flame, Clock } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
export function Process() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-6 h-6 text-white" />,
      title: "Free In-Person Estimate",
      description:
        "We visit your property to assess the square footage and condition of your driveway, providing a transparent, no-obligation quote.",
    },
    {
      icon: <Wind className="w-6 h-6 text-white" />,
      title: "Surface Preparation",
      description:
        "A clean surface is critical. We power edge the grass line, wire broom stubborn dirt, and use high-powered blowers to clear all debris.",
    },
    {
      icon: <Flame className="w-6 h-6 text-white" />,
      title: "Hot Oil Application",
      description:
        "We carefully apply our premium hot oil-based gilsonite sealer, ensuring even coverage and deep penetration into the asphalt pores.",
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Curing & Care",
      description:
        "We block off the entrance. The oil base requires 24-48 hours to properly cure and penetrate before vehicle traffic can resume.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-brand-asphalt text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-3">
            How We Work
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase leading-tight mb-6">
            The Normile Process
          </h3>
          <p className="text-gray-400 text-lg">
            Professional application is just as important as the product itself.
            We take no shortcuts in preparing and sealing your driveway.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-4 gap-10 sm:gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.15} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-brand-purple border-4 border-brand-asphalt flex items-center justify-center rounded-full mb-6 relative z-10 shadow-xl">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="font-heading text-xl font-bold uppercase mb-3 text-gray-100">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
