'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    period: '2010 - Present',
    title: 'Senior Partner',
    organization: 'Shahadat & Associates',
    description: 'Leading a team of legal experts in handling complex litigation and corporate cases.'
  },
  {
    icon: Calendar,
    period: '2008 - 2010',
    title: 'Associate Lawyer',
    organization: 'Dhaka Law Firm',
    description: 'Assisted senior lawyers in legal research, court proceedings, and client consultations.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional <span className="text-amber-500">Experience</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Extensive experience in providing clients with top-notch legal services across diverse fields.
          </p>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="flex items-start space-x-4"
            >
              <div className="bg-amber-500 rounded-lg p-4 shadow-lg">
                <experience.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {experience.title} <span className="text-amber-500">at {experience.organization}</span>
                </h3>
                <p className="text-slate-600 mb-2">{experience.period}</p>
                <p className="text-slate-600">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
