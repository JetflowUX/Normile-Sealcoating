import React from "react";
import { Home, Shield, Sparkles } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
export function Services() {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-brand-orange" />,
      title: "New Driveway Protection",
      description:
        "Protect your investment early. Our hot oil gilsonite sealer penetrates new asphalt, sealing pores against water and chemical damage before oxidation begins.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-brand-orange" />,
      title: "Aging Driveway Restoration",
      description:
        "Bring gray, faded asphalt back to life. The oil base in our gilsonite sealer replenishes the essential binders that the sun bakes out over time.",
    },
    {
      icon: <Home className="w-8 h-8 text-brand-orange" />,
      title: "Annual Maintenance",
      description:
        "Keep your property looking pristine. Regular applications of our premium hot oil sealer maintain that deep, jet-black curb appeal year after year.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gray-100 border-y border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <FadeIn className="max-w-2xl">
            <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-3">
              Our Expertise
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-asphalt uppercase leading-tight">
              Residential Driveway Specialists
            </h3>
          </FadeIn>
          <FadeIn delay={0.2} className="md:text-right">
            <p className="text-gray-600 font-medium max-w-md">
              We don't do commercial parking lots. We focus 100% of our
              craftsmanship on residential driveways, ensuring your home gets
              the attention it deserves.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="bg-white p-6 sm:p-8 border-t-4 border-brand-purple shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="mb-6 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-sm">
                  {service.icon}
                </div>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-brand-asphalt uppercase mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
