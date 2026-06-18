import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <br></br>
      <br></br>
      <br></br>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-josefin tracking-wide text-center mb-8">
          Terms of Service
        </h1>
        <p className="text-lg text-gray-600 font-lora leading-relaxed text-center mb-10">
          These Terms of Service govern your use of the FoodHub website. Please read them carefully before using our services.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            By accessing or using the FoodHub website (the "Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
          </p>
          <p className="text-gray-600 font-lora leading-relaxed mt-4">
            These Terms apply to all visitors, users, and others who access or use the Service. You must be at least 18 years old to use the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            2. Use of the Service
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            You may use the Service only in compliance with these Terms and all applicable local, state, national, and international laws, rules, and regulations.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 font-lora leading-relaxed">
            <li>You are responsible for your use of the Service and for any content you provide.</li>
            <li>You must not use the Service in any way that could damage, disable, overburden, or impair the Service.</li>
            <li>You must not interfere with any other user's use of the Service.</li>
            <li>You must not attempt to gain unauthorized access to the Service or its related systems or networks.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            3. Ordering and Payments
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            FoodHub acts as a platform to connect users with restaurants and food providers. We do not own, operate, or manage any restaurants or food preparation facilities.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 font-lora leading-relaxed">
            <li>All orders are subject to availability and restaurant acceptance.</li>
            <li>Prices are set by the restaurants and may change without notice.</li>
            <li>Payments are processed securely through our payment gateway. We are not responsible for payment disputes or refunds; please contact the restaurant directly.</li>
            <li>You are responsible for providing accurate delivery information.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            4. User Accounts
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            To place orders, you may need to create an account. You are responsible for maintaining the confidentiality of your account and password.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 font-lora leading-relaxed">
            <li>You must provide accurate information during registration.</li>
            <li>You must notify us immediately of any unauthorized use of your account.</li>
            <li>We reserve the right to suspend or terminate your account for violation of these Terms.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            5. Intellectual Property
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            The Service and its original content (excluding content provided by users or third-party licensors), features, and functionality are owned by FoodHub and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p className="text-gray-600 font-lora leading-relaxed mt-4">
            You agree not to reproduce, distribute, modify, or create derivative works of any part of the Service without our express written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            6. Prohibited Uses
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            You agree not to use the Service for any purpose that is illegal or prohibited by these Terms.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 font-lora leading-relaxed">
            <li>You may not use the Service to transmit viruses or malicious code.</li>
            <li>You may not engage in spamming or harassment.</li>
            <li>You may not impersonate any person or entity.</li>
            <li>You may not interfere with the Service or its servers.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            To the fullest extent permitted by law, FoodHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
          </p>
          <p className="text-gray-600 font-lora leading-relaxed mt-4">
            We do not guarantee the accuracy, completeness, or usefulness of any information on the Service. We are not responsible for the quality, safety, or legality of any content or services provided by third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            8. Indemnification
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            You agree to indemnify and hold FoodHub harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of these Terms or your violation of any law or the rights of a third party.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            9. Termination
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            10. Governing Law
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
          </p>
          <p className="text-gray-600 font-lora leading-relaxed mt-4">
            Our failure to enforce any right or provision of these Terms shall not constitute a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            11. Changes to These Terms
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            We may update these Terms from time to time. Changes will be posted on this page with an updated effective date. It is your responsibility to check this page periodically for changes.
          </p>
          <p className="text-gray-600 font-lora leading-relaxed mt-4">
            Your continued use of the Service following the posting of changes constitutes acceptance of those changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide mb-4">
            12. Contact Us
          </h2>
          <p className="text-gray-600 font-lora leading-relaxed">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-gray-600 font-lora leading-relaxed mt-4">
            FoodHub<br />
            [Your Company Address]<br />
            Email:{' '}
            <a
              href="mailto:support@foodhub.com"
              className="text-orange-500 hover:text-orange-600 font-lora transition duration-300"
            >
              support@foodhub.com
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

export default TermsOfService;