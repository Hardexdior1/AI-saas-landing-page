'use client';

import { ChevronUp } from 'lucide-react';
import { useState } from 'react';

const initialFaqs = [
  {
    question: 'How does your AI improve customer service?',
    open: false,
    answer:
      'Our AI understands customer queries in real-time and responds instantly using natural language, reducing response time and increasing customer satisfaction.',
  },
  {
    question: 'Can I integrate it with my existing tools like Zendesk or WhatsApp?',
    open: false,
    answer:
      'Yes. Our system offers seamless integrations via API and native plug-ins for popular platforms like Zendesk, WhatsApp, and Intercom.',
  },
  {
    question: 'Is the AI multilingual?',
    open: false,
    answer:
      'Absolutely. It supports over 40 languages out of the box and can be fine-tuned to adapt to your brand tone in any supported language.',
  },
  {
    question: 'Will I need a developer to set it up?',
    open: false,
    answer:
      'Not at all. Our onboarding process is no-code and takes just a few minutes. But we also offer API access for deeper integrations if you prefer.',
  },
];

const FAQSection = () => {
  const [faqItems, setFaqItems] = useState(initialFaqs);

  const toggleFAQ = (index) => {
    setFaqItems(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <section className="bg-zinc-900 text-white px-4 py-16 min-h-screen flex items-center">

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-center">
Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div key={index} className="border border-zinc-700 rounded overflow-hidden">
              {/* Question */}
              <div
                className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-300 hover:text-white cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronUp
                  className={`w-5 h-5 transition-transform duration-300 ${
                    faq.open ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </div>

              {/* Answer with animation */}
              <div
                className={`px-4 transition-all duration-300 ease-in-out text-gray-400 ${
                  faq.open ? 'max-h-40 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
