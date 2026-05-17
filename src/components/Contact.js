import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const contacts = [
    {
      label: 'Email',
      value: 'TapadiyaMS@Gmail.com',
      link: 'mailto:TapadiyaMS@Gmail.com'
    },
    {
      label: 'Phone',
      value: '+1.607.338.0402',
      link: 'tel:+16073380402'
    },
    {
      label: 'Location',
      value: 'Austin, TX | Open to relocation',
      link: null
    },
    {
      label: 'GitHub',
      value: 'github.com/TapadiyaMS',
      link: 'https://github.com/TapadiyaMS'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/TapadiyaMS',
      link: 'https://linkedin.com/in/TapadiyaMS/'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Contact</h2>

          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {contact.link ? (
                  <a
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-md transition group"
                  >
                    <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900">
                      {contact.label}
                    </span>
                    <p className="text-gray-900 font-medium text-base group-hover:text-blue-600 transition">
                      {contact.value}
                    </p>
                  </a>
                ) : (
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <span className="text-sm font-semibold text-gray-600">
                      {contact.label}
                    </span>
                    <p className="text-gray-900 font-medium text-base">
                      {contact.value}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}