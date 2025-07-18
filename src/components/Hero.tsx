'use client';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Scale, Calendar, MessageSquare } from 'lucide-react';
import { scheduleConsultation } from '@/lib/booking';
import { scrollToSection } from '@/lib/scroll';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPHBhdGggZD0iTTM2IDE4YzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNFM0IDMxLjI1NSA0IDE4IDkuMjU1IDAgMjQgMCA0IDQuNzQ1IDQgMTh6bTAtMTRjMCAxMy4yNTUtMTAuNzQ1IDI0LTI0IDI0UzEyIDMxLjI1NSAxMiAxOCAyMi43NDUgMCAzNiAwIDM2IDQuNzQ1IDM2IDE4eiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-20"></div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2"
          >
            <Scale className="h-8 w-8 text-amber-400" />
            <span className="text-xl font-bold">Advocate Md. Shahadat Hossain</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('scheduling')} className="hover:text-amber-400 transition-colors">Scheduling</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">Contact</button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent leading-tight">
               Md. Shahadat Hossain
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
                Expert Legal Advocate & Counselor
              </p>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                Providing comprehensive legal solutions with 13+ years of experience. 
                Specializing in civil law, criminal defense, and corporate matters with a 
                commitment to justice and client satisfaction.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button 
              onClick={scheduleConsultation}
              className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Consultation</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-amber-400/50 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold text-amber-400 mb-2">13+</h3>
              <p className="text-slate-300">Years of Experience</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-amber-400/50 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold text-amber-400 mb-2">300+</h3>
              <p className="text-slate-300">Cases Won</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-amber-400/50 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold text-amber-400 mb-2">24/7</h3>
              <p className="text-slate-300">Legal Support</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDownIcon className="h-8 w-8 text-amber-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
