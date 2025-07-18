'use client';

import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import { scheduleConsultation } from '@/lib/booking';

const testimonials = [
  {
    name: 'Ahmed Rahman',
    role: 'Business Owner',
    company: 'Rahman Enterprises',
    rating: 5,
    content: 'Advocate Shahadat handled my corporate legal matters with exceptional professionalism. His attention to detail and strategic approach helped my business navigate complex regulations successfully.',
    image: '/testimonial1.jpg' // placeholder
  },
  {
    name: 'Fatima Khatun',
    role: 'Civil Case Client',
    company: 'Property Dispute',
    rating: 5,
    content: 'I was facing a challenging property dispute that seemed impossible to resolve. Advocate Shahadat not only won the case but also guided me through every step with patience and clarity.',
    image: '/testimonial2.jpg' // placeholder
  },
  {
    name: 'Mohammad Ali',
    role: 'Family Law Client',
    company: 'Divorce Proceedings',
    rating: 5,
    content: 'During a difficult time in my life, Advocate Shahadat provided both legal expertise and emotional support. His compassionate approach made all the difference in my family law case.',
    image: '/testimonial3.jpg' // placeholder
  },
  {
    name: 'Rashida Begum',
    role: 'Criminal Defense Client',
    company: 'Legal Defense',
    rating: 5,
    content: 'When I needed criminal defense representation, Advocate Shahadat was my beacon of hope. His thorough preparation and skilled advocacy secured the best possible outcome for my case.',
    image: '/testimonial4.jpg' // placeholder
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our <span className="text-amber-500">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about their experience with our legal services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                  <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  <p className="text-amber-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="h-8 w-8 text-amber-200 absolute -top-2 -left-2" />
                <p className="text-slate-600 leading-relaxed italic pl-6">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Join Our Satisfied Clients?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Experience the same level of professional legal service that has earned us these testimonials. Contact us today for your consultation.
            </p>
            <button 
              onClick={scheduleConsultation}
              className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <span>📅</span>
              <span>Get Your Free Consultation</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
