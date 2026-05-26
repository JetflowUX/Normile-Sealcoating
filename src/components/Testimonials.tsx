import { Star } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
export function Testimonials() {
  const reviews = [
    {
      name: "Michael R.",
      location: "Springfield",
      text: "I've had my driveway sealed three times by other companies, and it always flaked off after winter. Normile used their oil-based sealer last year, and it still looks jet black and brand new. The difference is night and day.",
    },
    {
      name: "Sarah T.",
      location: "Oakville",
      text: "Incredibly professional crew. They took the time to edge the grass perfectly and blow off every speck of dirt before applying the hot oil. You can tell they actually care about the quality of their work.",
    },
    {
      name: "David L.",
      location: "Westwood",
      text: "I was skeptical about the hot oil gilsonite vs the standard stuff, but I'm a believer now. It completely rejuvenated my faded, gray driveway. It looks like freshly poured asphalt. Highly recommend Normile.",
    },
  ];

  return (
    <section className="py-24 bg-brand-purple text-white relative overflow-hidden">
      {/* Background Pattern/Texture */}
      <div className="testimonial-pattern absolute inset-0 opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-3">
            Customer Reviews
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold uppercase leading-tight">
            Word on the Street
          </h3>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <FadeIn key={index} delay={index * 0.15} direction="up">
              <div className="bg-brand-purple-light p-6 sm:p-8 border-t-4 border-brand-orange h-full flex flex-col">
                <div className="flex text-brand-orange mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 italic mb-8 flex-grow leading-relaxed">
                  "{review.text}"
                </p>
                <div>
                  <p className="font-heading font-bold text-lg uppercase tracking-wide">
                    {review.name}
                  </p>
                  <p className="text-brand-orange text-sm font-semibold uppercase tracking-wider">
                    {review.location}
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
