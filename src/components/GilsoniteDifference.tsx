import React from 'react';
import {
  Flame,
  Droplet,
  X,
  Check,
  ShieldAlert,
  ShieldCheck } from
'lucide-react';
import { FadeIn } from './ui/FadeIn';
export function GilsoniteDifference() {
  return (
    <section id="gilsonite" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-3">
            The Normile Advantage
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-asphalt uppercase leading-tight mb-6">
            Why Hot Oil Gilsonite?
          </h3>
          <p className="text-lg text-gray-600">
            Most contractors use cheap, water-based asphalt emulsions that sit
            on top of your driveway and wear away quickly. We exclusively use{' '}
            <strong className="text-brand-purple">
              Hot Oil-Based Gilsonite
            </strong>
            —a naturally occurring asphalt-like mineral that fundamentally
            restores your pavement.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Standard Sealer Card */}
          <FadeIn direction="right" delay={0.1}>
            <div className="bg-gray-50 border border-gray-200 p-8 h-full">
              <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
                <div className="w-12 h-12 bg-gray-200 flex items-center justify-center mr-4">
                  <Droplet className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-heading text-2xl font-bold text-gray-800 uppercase">
                    Standard Sealer
                  </h4>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                    Water-Based Emulsion
                  </p>
                </div>
              </div>

              <ul className="space-y-5">
                {[
                'Sits on the surface like a coat of paint',
                'Applied cold, limiting penetration',
                'Fades to gray quickly under UV rays',
                'Prone to flaking and peeling over time',
                'Does not restore oxidized asphalt binder'].
                map((item, i) =>
                <li key={i} className="flex items-start">
                    <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                )}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center text-gray-500">
                <ShieldAlert className="w-5 h-5 mr-2" />
                <span className="font-semibold text-sm uppercase tracking-wide">
                  Short-term cosmetic fix
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Gilsonite Card */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-brand-purple border-2 border-brand-purple-light p-8 h-full relative overflow-hidden shadow-xl">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl -mr-10 -mt-10" />

              <div className="flex items-center mb-6 pb-6 border-b border-brand-purple-light relative z-10">
                <div className="w-12 h-12 bg-brand-orange flex items-center justify-center mr-4">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-2xl font-bold text-white uppercase">
                    Normile Gilsonite
                  </h4>
                  <p className="text-sm text-brand-orange font-semibold uppercase tracking-wider">
                    Hot Oil-Based Sealer
                  </p>
                </div>
              </div>

              <ul className="space-y-5 relative z-10">
                {[
                'Penetrates deep into the asphalt pores',
                'Applied hot to ensure maximum absorption',
                'Cures to a rich, jet-black finish that lasts',
                'Will never flake or peel off your driveway',
                'Rejuvenates and restores dried out, oxidized asphalt'].
                map((item, i) =>
                <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                )}
              </ul>

              <div className="mt-8 pt-6 border-t border-brand-purple-light flex items-center text-white relative z-10">
                <ShieldCheck className="w-5 h-5 text-brand-green mr-2" />
                <span className="font-semibold text-sm uppercase tracking-wide">
                  Long-term structural protection
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>);

}