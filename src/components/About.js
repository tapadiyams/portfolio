import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 bg-white">
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
                I'm a seasoned software engineer passionate about building elegant, scalable systems that solve real-world problems. Beyond code, I'm deeply inspired by travel and exploration—discovering new cultures shapes how I think about design and problem-solving. I'm an avid woodworker, finding meditative clarity in crafting with my hands, and I have a growing fascination with Phad Art, the traditional Rajasthani folk art form that beautifully blends storytelling with intricate visual design.
                <br /><br />
                With proven expertise in architecting distributed systems, cloud solutions, and performance optimization at E2Open and AWS, I've successfully led projects that improved system efficiency, scalability, and security at scale. My technical foundation in Java, Python, and DevOps complements my belief that great engineering is about balance—between innovation and elegance, complexity and simplicity. I'm committed to leveraging these skills to drive meaningful technological advancement.
              </p>
            </motion.div>
          </div>


        </div>
      </AnimatedSection>
    </section>
  );
}