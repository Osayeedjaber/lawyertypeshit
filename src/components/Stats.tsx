'use client';

import { motion } from 'framer-motion';
import { Briefcase, Award, Users, Globe } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    label: 'Years Experience',
    value: '13+',
  },
  {
    icon: Award,
    label: 'Cases Won',
    value: '300+',
  },
  {
    icon: Users,
    label: 'Satisfied Clients',
    value: '150+',
  },
  {
    icon: Globe,
    label: 'Legal Areas',
    value: '6',
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            My <span className="text-amber-500">Achievements</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Over the years, we have achieved significant milestones, reflecting our dedication and expertise in the legal field.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-amber-500" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-slate-600 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

