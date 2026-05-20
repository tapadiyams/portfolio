import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function About() {
  const skills = {
    'Languages': ['Java', 'Python', 'C', 'Go', 'Bash Scripting', 'JSON'],
    'Databases': ['MongoDB', 'Oracle', 'PostgreSQL'],
    'Web & Frameworks': ['React.js', 'Angular.js', 'Node.js', 'Spring Boot'],
    'DevOps & Cloud': ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'Linux'],
    'Tools & Monitoring': ['Grafana', 'Prometheus', 'Elasticsearch', 'Wireshark', 'JMeter']
  };

  return (
    <section id="about" className="relative py-16 md:py-20 bg-white">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* About Section with Image */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="./assets/images/my_pic.jpeg"
                alt="Shubham Tapadiya"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Summary Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
              <p className="text-gray-700 leading-relaxed text-base">
                Seasoned Software Engineer with proven expertise in migrating systems to highly scalable distributed architectures with zero downtime. I specialize in cloud solutions and performance optimization, having successfully led critical projects at E2Open and AWS that significantly improved system efficiencies and security. Leveraging strong technical background in Java, Python, and DevOps, I'm eager to contribute skills to innovative environments. Open to relocation and committed to driving technological advancement and business growth through elegant, scalable solutions.
              </p>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-5 rounded-lg"
                >
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span key={i} className="px-2.5 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </AnimatedSection>
    </section>
  );
}