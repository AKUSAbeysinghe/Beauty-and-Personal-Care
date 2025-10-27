import React from 'react';

// --- Icon Components ---
const IconMail = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const IconPhone = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const Footer = () => {
  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#blog', label: 'Blog' },
    { href: '#contacts', label: 'Contacts' },
  ];

  const socialLinks = [
    { href: 'https://instagram.com/lunaria', label: 'Instagram' },
    { href: 'https://facebook.com/lunaria', label: 'Facebook' },
    { href: 'https://twitter.com/lunaria', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-stone-900/90 text-white">
      {/* Subtle overlay for consistency with hero */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Branding Section */}
          <div className="flex flex-col items-start">
            <a href="#" className="text-2xl font-bold uppercase tracking-widest text-white">
              Lunaria
            </a>
            <p className="mt-4 max-w-xs text-sm text-gray-300">
              Your glow begins here. Discover transformative beauty treatments crafted with care and precision.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">Explore</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base font-medium uppercase text-white transition-colors hover:text-gray-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <IconPhone className="h-5 w-5 text-gray-300" />
                <a href="tel:+1234567890" className="text-base text-white hover:text-gray-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IconMail className="h-5 w-5 text-gray-300" />
                <a href="mailto:info@lunaria.com" className="text-base text-white hover:text-gray-300">
                  info@lunaria.com
                </a>
              </li>
              <li className="text-base text-gray-300">
                123 Glow Street, Serenity City
              </li>
            </ul>
          </div>

          {/* Social Media & Call-to-Action */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">Connect</h3>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base font-medium uppercase text-white transition-colors hover:text-gray-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#booking"
              className="mt-6 inline-block rounded-md bg-stone-700/50 px-5 py-2.5 text-sm font-semibold uppercase text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-stone-600/50"
            >
              Book an Appointment
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Lunaria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;