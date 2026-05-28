import React from "react";
import { FadeIn } from "./ui/FadeIn";
export function Gallery() {
  const images = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/2024-06-25_11_43_25_An_asphalt_driveway_with_a_fresh_sealcoat_along_Mountain_View_Road_in_the_Mountainview_section_of_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg/1280px-2024-06-25_11_43_25_An_asphalt_driveway_with_a_fresh_sealcoat_along_Mountain_View_Road_in_the_Mountainview_section_of_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg",
      caption: "Fresh Sealcoat Finish",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/2023-09-20_13_47_41_A_fresh_layer_of_sealcoat_being_applied_to_an_asphalt_driveway_along_Lochatong_Road_in_the_Mountainview_section_of_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg/1280px-2023-09-20_13_47_41_A_fresh_layer_of_sealcoat_being_applied_to_an_asphalt_driveway_along_Lochatong_Road_in_the_Mountainview_section_of_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg",
      caption: "Sealcoat Application",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2026-04-14_12_06_18_Fresh_asphalt_on_a_newly_paved_driveway_along_Windybush_Way_in_the_Mountainview_section_of_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg/1280px-2026-04-14_12_06_18_Fresh_asphalt_on_a_newly_paved_driveway_along_Windybush_Way_in_the_Mountainview_section_of_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg",
      caption: "New Asphalt Surface",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Asphalt_paver_working.jpg/1280px-Asphalt_paver_working.jpg",
      caption: "Driveway Prep Crew",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Modern_residential_driveway_Costa_dels_Pins_Mallorca.jpg/1280px-Modern_residential_driveway_Costa_dels_Pins_Mallorca.jpg",
      caption: "Residential Driveway",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/2022-08-03_15_58_00_A_freshly_sealed_asphalt_driveway_along_Van_Duyn_Drive_in_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg/1280px-2022-08-03_15_58_00_A_freshly_sealed_asphalt_driveway_along_Van_Duyn_Drive_in_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg",
      caption: "Jet Black Finish",
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
                  className="w-full h-44 sm:h-60 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
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
