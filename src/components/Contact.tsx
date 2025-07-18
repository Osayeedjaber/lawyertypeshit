'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';
import { initiatePhoneCall, openWhatsApp } from '@/lib/booking';
import { Toaster } from 'react-hot-toast';

export default function Contact() {
  const { form, onSubmit, isSubmitting } = useContactForm();

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <Toaster position="top-right" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get in <span className="text-amber-500">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to discuss your legal needs? Contact us today for a consultation and let us help you navigate your legal challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 rounded-lg p-3">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <p className="text-slate-600 cursor-pointer hover:text-amber-600 transition-colors" onClick={() => initiatePhoneCall('+8801682181118')}>+880 1682-181118</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 rounded-lg p-3">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">advshahadathossain16@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 rounded-lg p-3">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Office Address</h4>
                    <p className="text-slate-600">Parjoar Center (Underground), Room No. 13</p>
                    <p className="text-slate-600">Dhaka Judge Court, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 rounded-lg p-3">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Office Hours</h4>
                    <p className="text-slate-600">Monday - Friday: 8:30 AM - 5:30 PM</p>
                    <p className="text-slate-600">Saturday: 8:30 AM - 5:30 PM</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 cursor-pointer hover:bg-green-50 p-3 rounded-lg transition-colors" onClick={() => openWhatsApp('+8801682181118', 'Hello, I need legal consultation regarding my case.')}>
                  <div className="bg-green-100 rounded-lg p-3">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">WhatsApp</h4>
                    <p className="text-slate-600">+880 1682-181118</p>
                    <p className="text-green-600 text-sm">Click to chat instantly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-6">
              <h4 className="font-semibold text-slate-900 mb-2">Emergency Contact</h4>
              <p className="text-slate-600 mb-2">For urgent legal matters outside office hours:</p>
              <p className="text-amber-600 font-semibold cursor-pointer hover:text-amber-700 transition-colors" onClick={() => initiatePhoneCall('+8801682181118')}>+880 1682-181118</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white text-slate-900 placeholder:text-slate-400"
                    placeholder="Enter your first name"
                    {...form.register('firstName')}
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-red-600 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white text-slate-900 placeholder:text-slate-400"
                    placeholder="Enter your last name"
                    {...form.register('lastName')}
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-red-600 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white text-slate-900 placeholder:text-slate-400"
                  placeholder="Enter your email"
                  {...form.register('email')}
                />
                {form.formState.errors.email && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white text-slate-900 placeholder:text-slate-400"
                  placeholder="Enter your phone number"
                  {...form.register('phone')}
                />
                {form.formState.errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Legal Matter Type
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white text-slate-900" {...form.register('legalMatter')}>
                  <option value="">Select a legal matter</option>
                  <option value="civil">Civil Litigation</option>
                  <option value="criminal">Criminal Defense</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="family">Family Law</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="other">Other</option>
                </select>
                {form.formState.errors.legalMatter && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.legalMatter.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white text-slate-900 placeholder:text-slate-400 resize-none"
                  placeholder="Please describe your legal matter"
                  {...form.register('message')}
                ></textarea>
                {form.formState.errors.message && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Find Our Office</h3>
            <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">Interactive Map</p>
                <p className="text-slate-500 text-sm">Google Maps integration would go here</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
