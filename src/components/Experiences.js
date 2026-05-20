import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data";
import AnimatedSection from "./AnimatedSection";

export default function Experiences() {
  const skills = {
    'Languages': ['Java', 'Python', 'C', 'Go', 'Bash Scripting', 'JSON'],
    'Databases': ['MongoDB', 'Oracle', 'PostgreSQL'],
    'Web & Frameworks': ['React.js', 'Angular.js', 'Node.js', 'Spring Boot'],
    'DevOps & Cloud': ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'Linux'],
    'Tools & Monitoring': ['Grafana', 'Prometheus', 'Elasticsearch', 'Wireshark', 'JMeter']
  };

  return (
    <section id="experiences" className="bg-white py-16 md:py-20 border-t border-gray-200">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-12">Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-gray-200 pl-6 pb-6"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-700">{exp.title}</h3>
                    <p className="text-gray-500 font-medium">{exp.subtitle}</p>
                  </div>
                  <span className="text-sm text-gray-400 font-medium">{exp.period}</span>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-700 mb-8">Technical Skills</h3>
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
                  <h4 className="font-bold text-gray-700 mb-3 text-sm">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span key={i} className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
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