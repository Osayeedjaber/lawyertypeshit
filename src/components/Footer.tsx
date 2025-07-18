'use client';

import { motion } from 'framer-motion';
import { Phone, Scale, MapPin, Clock, Award, Users } from 'lucide-react';
import { initiatePhoneCall, openWhatsApp, scheduleConsultation } from '@/lib/booking';
import { scrollToSection } from '@/lib/scroll';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-1 lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-500 rounded-full text-slate-900">
                  <Scale className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Advocate</h3>
                  <h3 className="text-xl font-bold">Md. Shahadat Hossain</h3>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Expert legal counsel with 13+ years of experience serving clients across Bangladesh. 
                Specializing in civil litigation, criminal defense, corporate law, and family matters.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  <span className="text-sm text-slate-400">Licensed Since 2011</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-amber-500" />
                  <span className="text-sm text-slate-400">500+ Cases</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    Legal Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('scheduling')}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    Schedule Consultation
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </motion.div>

            {/* Legal Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Legal Services</h4>
              <ul className="space-y-3">
                <li><span className="text-slate-400 text-sm">Civil Litigation</span></li>
                <li><span className="text-slate-400 text-sm">Criminal Defense</span></li>
                <li><span className="text-slate-400 text-sm">Corporate Law</span></li>
                <li><span className="text-slate-400 text-sm">Family Law</span></li>
                <li><span className="text-slate-400 text-sm">Real Estate</span></li>
                <li><span className="text-slate-400 text-sm">Tax & VAT Legal Advice</span></li>
                <li><span className="text-slate-400 text-sm">Documentation</span></li>
                <li><span className="text-slate-400 text-sm">Legal Consultancy</span></li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-slate-800 py-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Office Address */}
            <div className="flex items-start space-x-4">
              <MapPin className="h-5 w-5 text-amber-500 mt-1" />
              <div>
                <h5 className="font-semibold mb-2">Office Address</h5>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Parjoar Center (Underground)<br />
                  Room No. 13<br />
                  Dhaka Judge Court<br />
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex items-start space-x-4">
              <Phone className="h-5 w-5 text-amber-500 mt-1" />
              <div>
                <h5 className="font-semibold mb-2">Contact Details</h5>
                <div className="space-y-1">
                  <p 
                    className="text-slate-400 text-sm cursor-pointer hover:text-amber-400 transition-colors"
                    onClick={() => initiatePhoneCall('+8801682181118')}
                  >
                    📞 +880 1682-181118
                  </p>
                  <p className="text-slate-400 text-sm">
                    📧 advshahadathossain16@gmail.com
                  </p>
                  <p 
                    className="text-slate-400 text-sm cursor-pointer hover:text-green-400 transition-colors"
                    onClick={() => openWhatsApp('+8801682181118', 'Hello, I need legal consultation.')}
                  >
                    💬 WhatsApp Support
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start space-x-4">
              <Clock className="h-5 w-5 text-amber-500 mt-1" />
              <div>
                <h5 className="font-semibold mb-2">Office Hours</h5>
                <div className="space-y-1 text-slate-400 text-sm">
                  <p>Monday - Friday: 8:30 AM - 5:30 PM</p>
                  <p>Saturday: 8:30 AM - 5:30 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-amber-400 text-xs mt-2">Emergency consultations available</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-800 py-8 text-center"
        >
          <h4 className="text-xl font-semibold mb-4">Ready to Get Started?</h4>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Don&apos;t let legal challenges overwhelm you. Contact us today for expert legal advice and representation.
          </p>
          <button
            onClick={scheduleConsultation}
            className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Schedule Free Consultation
          </button>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-slate-500 text-sm">
                © 2025 Shahadat & Associates. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-500 text-sm">Member of:</span>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <span>🏛️ Bangladesh Bar Council</span>
                <span>•</span>
                <span>⚖️ Dhaka Bar Association</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

