import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 bg-white border-t border-gray-200">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* About Section with Image - 30/70 split */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Image - 30% */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="./assets/images/my_pic.jpeg"
                alt="Shubham Tapadiya"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Summary Section - 70% */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex-1 w-full md:w-2/3"
            >
              <h2 className="text-3xl font-bold text-gray-700 mb-6">About</h2>
              <p className="text-gray-600 leading-relaxed text-base">
                I'm a traveler, woodworker, and passionate learner inspired by cultures and traditions around the world, particularly Phad Art, the beautiful Rajasthani folk art form that blends storytelling with intricate visual design. I believe great engineering mirrors this approach: balancing complexity with elegance, innovation with purpose.
                <br /><br />
                By day, I architect distributed systems and cloud solutions at E2Open, leading projects that scaled systems to millions of daily requests while improving efficiency, security, and reliability. My foundation in Java, Python, and DevOps shapes how I solve problems. Ultimately, I build software the way I approach woodworking or travel: with intention, craftsmanship, and deep appreciation for how things fit together.
              </p>
            </motion.div>
          </div>


        </div>
      </AnimatedSection>
    </section>
  );
}