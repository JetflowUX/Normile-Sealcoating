import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
  {
    question: 'Why is Hot Oil Gilsonite better than standard sealer?',
    answer:
    'Standard water-based sealers act like paint—they sit on the surface and eventually flake or peel away. Our hot oil-based gilsonite sealer actually penetrates the pores of the asphalt, replenishing the oils that the sun bakes out over time. It rejuvenates the pavement from the inside out and cures to a deep, long-lasting black finish.'
  },
  {
    question: 'Do you seal commercial parking lots?',
    answer:
    'No. We specialize exclusively in residential driveways. By focusing entirely on homeowners, we can maintain a higher standard of craftsmanship and give your property the detailed attention it deserves.'
  },
  {
    question: 'How long does the sealcoating last?',
    answer:
    'Because our gilsonite sealer penetrates the asphalt rather than just coating it, it typically lasts significantly longer than standard water-based emulsions. Depending on weather conditions and traffic, you can expect a beautiful, protective finish for 2 to 3 years before needing a maintenance coat.'
  },
  {
    question: 'When can I drive on my newly sealed driveway?',
    answer:
    'Oil-based sealers require a bit more time to properly cure and penetrate compared to water-based products. We recommend keeping vehicles off the driveway for 24 to 48 hours, depending on temperature and sunlight. You can usually walk on it carefully after 12 hours.'
  },
  {
    question: 'What time of year do you work?',
    answer:
    'We typically operate from late Spring through early Fall. Hot oil gilsonite needs warm temperatures to properly penetrate and cure into the asphalt. We monitor the weather closely to ensure optimal application conditions.'
  }];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-3">
            Common Questions
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-asphalt uppercase leading-tight">
            Frequently Asked Questions
          </h3>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) =>
          <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white border border-gray-200">
                <button
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-inset"
                onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
                }>
                
                  <span className="font-heading text-xl font-bold text-brand-asphalt uppercase pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                  className={`w-6 h-6 text-brand-orange transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
                
                </button>
                <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>);

}