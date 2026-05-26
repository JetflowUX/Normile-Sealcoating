import { Phone, CheckCircle2, Home } from "lucide-react";
import { Button } from "./ui/Button";
import { FadeIn } from "./ui/FadeIn";
export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 sm:pt-20 bg-brand-asphalt overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-asphalt via-brand-asphalt/90 to-brand-asphalt/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1584464457692-73ec4d7d3324?q=80&w=2000&auto=format&fit=crop"
          alt="Freshly sealed black asphalt driveway"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center bg-brand-purple/80 border border-brand-purple-light px-3 sm:px-4 py-2 mb-6 max-w-full">
              <Home className="w-4 h-4 text-brand-orange mr-2" />
              <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-widest">
                Residential Driveways
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white uppercase leading-[0.95] mb-6 text-balance">
              They Pave It,
              <br />
              <span className="text-brand-orange">We Save It.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-medium leading-relaxed">
              We specialize exclusively in{" "}
              <strong className="text-white">
                Hot Oil-Based Gilsonite Asphalt Sealer
              </strong>
              . Unlike cheap water-based emulsions that just paint the surface,
              our hot oil treatment penetrates, rejuvenates, and protects your
              driveway from the inside out.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get Your Free Estimate
            </Button>
            <Button
              href="tel:555-0198"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-brand-asphalt/50 border-gray-500 text-white hover:border-brand-orange hover:bg-brand-orange"
            >
              <Phone className="w-5 h-5 mr-2" />
              (555) 019-8273
            </Button>
          </FadeIn>

          {/* Trust Strip */}
          <FadeIn
            delay={0.4}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 border-t border-gray-700 pt-8"
          >
            <div className="flex items-center">
              <CheckCircle2 className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" />
              <span className="text-gray-300 font-semibold text-sm uppercase tracking-wide">
                Family Owned & Operated
              </span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" />
              <span className="text-gray-300 font-semibold text-sm uppercase tracking-wide">
                Fully Licensed & Insured
              </span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" />
              <span className="text-gray-300 font-semibold text-sm uppercase tracking-wide">
                Gilsonite Specialists
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
