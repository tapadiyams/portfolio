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
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/TapadiyaMS',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/TapadiyaMS',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.794 0-9.708h3.554v1.375c.429-.663 1.196-1.608 2.905-1.608 2.121 0 3.71 1.386 3.71 4.365v5.576zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.71 0-.955.771-1.71 1.957-1.71 1.185 0 1.914.755 1.938 1.71 0 .949-.753 1.71-1.98 1.71zm1.946 11.597H3.392V9.16h3.891v11.292zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/TapadiyaMS',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-4 mb-12">
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
                    className="block p-4 bg-white rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-md transition group"
                  >
                    <span className="text-sm font-semibold text-gray-500 group-hover:text-gray-700">
                      {contact.label}
                    </span>
                    <p className="text-gray-700 font-medium text-base group-hover:text-blue-600 transition">
                      {contact.value}
                    </p>
                  </a>
                ) : (
                  <div className="p-4 bg-white rounded-lg border border-gray-100">
                    <span className="text-sm font-semibold text-gray-500">
                      {contact.label}
                    </span>
                    <p className="text-gray-700 font-medium text-base">
                      {contact.value}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links Section with Border Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-200"
          >
            <div className="flex justify-center gap-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-900 hover:text-gray-600 transition-colors duration-200 hover:scale-110 transform"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </AnimatedSection>
    </section>
  );
}