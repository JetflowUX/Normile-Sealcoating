export function Footer() {
  return (
    <footer className="bg-brand-asphalt text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-8 pb-8 border-b border-gray-800">
          {/* Brand */}
          <div>
            <a href="#" className="flex flex-col mb-4">
              <span className="font-heading text-2xl font-bold tracking-tight text-white uppercase leading-none">
                Normile
              </span>
              <span className="font-heading text-brand-orange text-sm font-semibold tracking-widest uppercase leading-none mt-1">
                Sealcoating
              </span>
            </a>
            <p className="text-sm max-w-xs">
              Premium residential driveway sealcoating specializing in hot
              oil-based gilsonite application.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white text-lg font-bold uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm font-semibold uppercase tracking-wider">
              <li>
                <a
                  href="#gilsonite"
                  className="hover:text-brand-orange transition-colors"
                >
                  The Gilsonite Difference
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-orange transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-brand-orange transition-colors"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-brand-orange transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-brand-orange transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-white text-lg font-bold uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="font-bold text-white text-xl font-heading tracking-wide">
                <a
                  href="tel:555-0198"
                  className="hover:text-brand-orange transition-colors"
                >
                  (555) 019-8273
                </a>
              </li>
              <li>estimates@normilesealcoating.com</li>
              <li className="pt-2">
                <span className="font-bold uppercase tracking-wider text-gray-500 text-xs block mb-1">
                  Service Area
                </span>
                Springfield & Surrounding Areas
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs uppercase tracking-wider font-semibold">
          <p>
            &copy; {new Date().getFullYear()} Normile Sealcoating. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0">Residential Driveways.</p>
        </div>
      </div>
    </footer>
  );
}
