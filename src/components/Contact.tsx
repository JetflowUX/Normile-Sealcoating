import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/Button";
import { FadeIn } from "./ui/FadeIn";
export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <FadeIn direction="right">
            <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-3">
              Get in Touch
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-asphalt uppercase leading-tight mb-6">
              Request a Free Estimate
            </h3>
            <p className="text-gray-600 text-lg mb-10">
              Ready to protect your driveway with premium hot oil gilsonite?
              Call us directly or fill out the form, and we'll get back to you
              promptly to schedule an on-site evaluation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-purple flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">
                    Call Us Directly
                  </p>
                  <a
                    href="tel:555-0198"
                    className="font-heading text-2xl sm:text-3xl font-bold text-brand-asphalt hover:text-brand-orange transition-colors break-words"
                  >
                    (555) 019-8273
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">
                    Email Us
                  </p>
                  <a
                    href="mailto:estimates@normilesealcoating.com"
                    className="text-lg font-semibold text-brand-asphalt hover:text-brand-orange transition-colors"
                  >
                    estimates@normilesealcoating.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">
                    Service Area
                  </p>
                  <p className="text-gray-800 font-medium">
                    Proudly serving residential driveways in Springfield,
                    Oakville, Westwood, and surrounding communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">
                    Hours
                  </p>
                  <p className="text-gray-800 font-medium">
                    Monday - Saturday: 8:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-gray-50 p-8 md:p-10 border border-gray-200 shadow-sm">
              <h4 className="font-heading text-2xl font-bold text-brand-asphalt uppercase mb-6">
                Send Us a Message
              </h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 text-base border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 text-base border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 text-base border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple outline-none transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2"
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full px-4 py-3 text-base border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple outline-none transition-colors"
                    placeholder="123 Main St"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2"
                  >
                    Additional Details (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 text-base border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple outline-none transition-colors resize-none"
                    placeholder="Tell us about your driveway..."
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Submit Request
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  We respect your privacy. Your information will only be used to
                  contact you regarding your estimate.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
