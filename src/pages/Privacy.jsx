import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <br></br>
      <br></br>
      <br></br>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-josefin tracking-wide text-center mb-8">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 font-lora leading-relaxed text-center mb-10">
          Your privacy is important to us. This Privacy Policy explains how FoodHub collects, uses, and protects your information.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            We collect information to provide and improve our services. The types of information we may collect include:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 font-lora leading-relaxed">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, or other details you provide when contacting us, placing orders (e.g., via WhatsApp), or filling out forms on our site.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our website, such as pages visited, time spent, and IP address.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your experience, analyze site usage, and personalize content. You can manage cookie preferences through your browser settings.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 font-lora leading-relaxed">
            <li>To process and fulfill your orders, including communicating via third-party platforms like WhatsApp.</li>
            <li>To respond to inquiries submitted through our contact form or other channels.</li>
            <li>To improve our website, services, and user experience.</li>
            <li>To send promotional offers or updates (with your consent, where required).</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            3. Sharing Your Information
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 font-lora leading-relaxed">
            <li>
              <strong>Service Providers:</strong> Third-party services (e.g., WhatsApp for order communication, analytics providers) that help us operate our website and fulfill orders.
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law or to protect our rights, safety, or property.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            4. Your Rights
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 font-lora leading-relaxed">
            <li>
              <strong>Access:</strong> Request a copy of the personal information we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate or incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations.
            </li>
            <li>
              <strong>Opt-Out:</strong> Opt out of promotional communications or certain data processing activities.
            </li>
          </ul>
          <p className="text-gray-600 font-lora leading-relaxed mt-4">
            To exercise these rights, please contact us at{' '}
            <a
              href="mailto:privacy@foodhub.com"
              className="text-orange-500 hover:text-orange-600 font-lora transition duration-300"
            >
              privacy@foodhub.com
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            5. Data Security
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            6. Cookies and Tracking
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            We use cookies to enhance your browsing experience. You can disable cookies through your browser settings, but this may affect site functionality. For more details, please review our{' '}
            <Link
              to="/cookie-policy"
              className="text-orange-500 hover:text-orange-600 font-lora transition duration-300"
            >
              Cookie Policy
            </Link>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            7. Third-Party Links
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            Our website may contain links to third-party sites (e.g., WhatsApp for order placement). We are not responsible for the privacy practices of these sites. Please review their privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            8. Changes to This Policy
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Please check back periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            9. Contact Us
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-600 font-lora leading-relaxed mt-4">
            FoodHub<br />
            [Your Company Address]<br />
            Email:{' '}
            <a
              href="mailto:privacy@foodhub.com"
              className="text-orange-500 hover:text-orange-600 font-lora transition duration-300"
            >
              privacy@foodhub.com
            </a>
          </p>
        </section>

        <p className="text-gray-600 font-lora leading-relaxed text-center">
          <strong>Effective Date:</strong> September 23, 2025
        </p>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-lora font-semibold rounded-full hover:bg-orange-600 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;