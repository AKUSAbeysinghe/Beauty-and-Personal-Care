import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is FoodHub?',
      answer:
        'FoodHub is a platform that allows you to explore and order from a variety of dining options, including Fast Food, Casual Dining, and Cafés & Bakeries. Browse our menu categories, view delicious dishes, and place orders directly with our restaurant partners.',
    },
    {
      question: 'How do I place an order on FoodHub?',
      answer:
        'To place an order, browse our menu categories (e.g., Fast Food, Casual Dining, Cafés & Bakeries) and select a dish. Click the "Order Now" button, which may direct you to a WhatsApp chat with the restaurant to finalize your order. Follow the restaurant’s instructions for payment and delivery.',
    },
    {
      question: 'What types of cuisines are available?',
      answer:
        'FoodHub offers a diverse selection of cuisines, including Fast Food Classics (e.g., burgers, fries), Casual Dining (e.g., hearty meals for family gatherings), and Café & Bakery items (e.g., artisan coffee, pastries). Explore our menu pages for full details.',
    },
    {
      question: 'How does delivery work?',
      answer:
        'Delivery is managed by our restaurant partners. After placing an order (e.g., via WhatsApp), the restaurant will provide delivery options and estimated times. Delivery availability and fees vary by restaurant.',
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'Payment methods depend on the restaurant you’re ordering from. Many accept payments via third-party platforms (e.g., WhatsApp-linked payment systems) or cash on delivery. Check with the restaurant during the ordering process.',
    },
    {
      question: 'Can I cancel or modify my order?',
      answer:
        'Order cancellations or modifications are handled directly by the restaurant. Contact them via the provided WhatsApp link or contact information as soon as possible to make changes.',
    },
    {
      question: 'How do I contact FoodHub for support?',
      answer:
        'For support, reach out to us at <a href="mailto:support@foodhub.com" class="text-orange-500 hover:text-orange-600 font-lora transition duration-300">support@foodhub.com</a> or use our <Link to="/contact" class="text-orange-500 hover:text-orange-600 font-lora transition duration-300">Contact</Link> page. We’re here to help with any questions!',
    },
    {
      question: 'Are there any membership or subscription fees?',
      answer:
        'FoodHub is free to use for browsing and ordering. There are no membership or subscription fees, though individual orders may include restaurant-specific charges, taxes, or delivery fees.',
    },
    {
      question: 'How can I provide feedback or suggest new restaurants?',
      answer:
        'We love hearing from you! Submit feedback or restaurant suggestions via our <Link to="/contact" class="text-orange-500 hover:text-orange-600 font-lora transition duration-300">Contact</Link> page or email us at <a href="mailto:support@foodhub.com" class="text-orange-500 hover:text-orange-600 font-lora transition duration-300">support@foodhub.com</a>.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <br></br>
      <br></br>
      <br></br>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-josefin tracking-wide text-center mb-8">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 font-lora leading-relaxed text-center mb-10">
          Find answers to common questions about using FoodHub, ordering, and more.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <h2 className="text-xl font-bold text-gray-800 font-josefin tracking-wide">
                  {faq.question}
                </h2>
                <svg
                  className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div
                  className="pb-4 text-gray-600 font-lora leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </div>
          ))}
        </div>

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

export default FAQ;