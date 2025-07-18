'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { scheduleConsultation } from '@/lib/booking';

export default function Scheduling() {
  return (
    <section id="scheduling" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Schedule Your <span className="text-amber-500">Consultation</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Book a convenient time for your legal consultation. Choose from available slots and get expert legal advice tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Why Schedule a Consultation?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 rounded-lg p-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Personalized Legal Advice</h4>
                  <p className="text-slate-600">Get tailored legal solutions specific to your unique situation and requirements.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 rounded-lg p-3">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Flexible Scheduling</h4>
                  <p className="text-slate-600">Choose a time that works for you from our available consultation slots.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 rounded-lg p-3">
                  <Calendar className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Easy Booking Process</h4>
                  <p className="text-slate-600">Simple online booking system that takes just a few minutes to complete.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h4 className="font-semibold text-slate-900 mb-3">What to Expect:</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-600">30-60 minute consultation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-600">Case evaluation and analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-600">Legal strategy discussion</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-600">Next steps and timeline</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Booking Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <div className="text-center mb-8">
              <div className="bg-amber-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Calendar className="h-12 w-12 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Book Your Consultation
              </h3>
              <p className="text-slate-600">
                Click the button below to access our scheduling system and choose your preferred time.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-1">13+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-1">500+</div>
                  <div className="text-sm text-slate-600">Cases Handled</div>
                </div>
              </div>

              <button
                onClick={scheduleConsultation}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              {/* Calendly inline widget will be inserted here */}
              <div id="calendly-widget-container" className="mt-6"></div>

              <div className="text-center">
                <p className="text-sm text-slate-500 mb-2">
                  Available Monday - Friday: 8:30 AM - 5:30 PM
                </p>
                <p className="text-sm text-slate-500">
                  Saturday: 8:30 AM - 5:30 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Simple 3-Step Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full p-6 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Choose Time</h4>
              <p className="text-slate-600">Select your preferred date and time from available slots.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full p-6 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Provide Details</h4>
              <p className="text-slate-600">Share basic information about your legal matter.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full p-6 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Get Expert Advice</h4>
              <p className="text-slate-600">Meet with our experienced lawyer for personalized guidance.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
