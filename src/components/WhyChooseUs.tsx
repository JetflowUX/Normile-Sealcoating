import React from "react";
import { Shield, Home, ThumbsUp, Award } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Home className="w-6 h-6 text-brand-orange" />,
      title: "Residential Focus",
      description:
        "We don't rush through your driveway to get to a commercial parking lot. Homeowners are our only priority.",
    },
    {
      icon: <Award className="w-6 h-6 text-brand-orange" />,
      title: "Gilsonite Specialists",
      description:
        "We are experts in hot oil-based application, providing a superior product that most competitors don't offer.",
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-orange" />,
      title: "Fully Insured",
      description:
        "Have peace of mind knowing that our business is fully licensed and insured to work on your property.",
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-brand-orange" />,
      title: "Satisfaction Guaranteed",
      description:
        "We stand behind our work. If something isn't right, we'll make it right. Our reputation is built on your satisfaction.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <FadeIn direction="right">
            <img
              src="https://images.unsplash.com/photo-1518481852452-9415b262eba4?q=80&w=1600&auto=format&fit=crop"
              alt="Professional contractor working on a driveway"
              className="w-full h-80 sm:h-[420px] lg:h-[500px] object-cover shadow-2xl"
            />
          </FadeIn>

          <div className="space-y-10">
            <FadeIn direction="left">
              <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-3">
                Trust & Reliability
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-asphalt uppercase leading-tight mb-6">
                A Local Contractor You Can Count On
              </h3>
              <p className="text-gray-600 text-lg">
                When you hire Normile Sealcoating, you're hiring a dedicated
                team that treats your property with respect. We show up on time,
                do exactly what we promised, and leave you with a beautiful,
                protected driveway.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {reasons.map((reason, index) => (
                <FadeIn key={index} delay={0.1 * index} direction="up">
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">{reason.icon}</div>
                    <div>
                      <h4 className="font-heading text-xl font-bold text-brand-asphalt uppercase mb-2">
                        {reason.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
