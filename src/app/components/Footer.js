'use client';

import React from 'react';
import Link from 'next/link';
import { usePop } from '../context/PopUpContext';
const Footer = () => {
  const footerData = [
    {
      title: 'Product',
      links: [
        { name: 'Features', route: '#features' },
        { name: 'How It Works', route: '#how' },
        { name: 'Use Cases', route: '#usecases' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', route: '#about' },
        { name: 'Team', route: '#team' },
        { name: 'Privacy Policy', route: '#privacy' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', route: '#blog' },
        { name: 'FAQs', route: '#faq' },
        { name: 'API Docs', route: '#docs' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: '📧 hello@aisaas.com', route: '#' },
        { name: '📍 Lagos, Nigeria', route: '#' },
      ],
    },
  ];

  const {setShowPopUp}=usePop()
  return (
    <div className="bg-black pt-10">
      <footer className="container grid gap-6 lg:grid-cols-4 px-4 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:col-span-4">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.route}
                      className="text-sm text-white hover:text-blue-400 transition block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Block */}
          <div>
            <h3 className="font-bold mb-4 text-white">Get Started</h3>
            <Link
              href="#"
              onClick={(()=>{
                setShowPopUp(true)
              })}
              className="inline-block text-sm bg-white text-black px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </footer>

      {/* Optional: Bottom line or social media */}
      <div className="container mt-8 mb-6 py-5 border-t border-white/20 text-center">
        <p className="text-sm text-white">Powered by AI. Built for humans.</p>
      </div>
    </div>
  );
};

export default Footer;
