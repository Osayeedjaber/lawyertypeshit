'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, CheckCircle, Phone, MessageSquare } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';
import { initiatePhoneCall } from '@/lib/booking';

interface ServiceDetailProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    overview: string;
    whatWeOffer: string[];
    process: {
      step: string;
      description: string;
    }[];
    benefits: string[];
    whenToConsult: string[];
    timeline: string;
    cost: string;
  };
  onClose: () => void;
}

export default function ServiceDetail({ service, onClose }: ServiceDetailProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-amber-500 text-white p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon className="h-10 w-10" />
              <div>
                <h1 className="text-2xl font-bold">{service.title}</h1>
                <p className="text-amber-100">{service.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-amber-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Overview</h2>
            <p className="text-slate-600 leading-relaxed">{service.overview}</p>
          </section>

          {/* What We Offer */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.whatWeOffer.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Our Process</h2>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-amber-100 rounded-full p-2 w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{step.step}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Benefits of Our Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-600">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* When to Consult */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">When to Consult Us</h2>
            <div className="bg-slate-50 rounded-lg p-4">
              <ul className="space-y-2">
                {service.whenToConsult.map((situation, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{situation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Timeline & Cost */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-5 w-5 text-amber-600" />
                <h3 className="font-semibold text-slate-900">Timeline</h3>
              </div>
              <p className="text-slate-600 text-sm">{service.timeline}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-amber-600 font-semibold">₹</span>
                <h3 className="font-semibold text-slate-900">Cost</h3>
              </div>
              <p className="text-slate-600 text-sm">{service.cost}</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-slate-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-6">
              Contact us today to discuss your {service.title.toLowerCase()} needs and get expert legal guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => initiatePhoneCall('+8801682181118')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  scrollToSection('contact');
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
