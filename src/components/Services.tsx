'use client';

import { motion } from 'framer-motion';
import { 
  Scale, 
  Shield, 
  Building, 
  Users, 
  FileText, 
  Home,
  Calculator,
  MessageSquare
} from 'lucide-react';
import { scheduleConsultation, requestQuote } from '@/lib/booking';
import { scrollToSection } from '@/lib/scroll';
import ServiceDetail from './ServiceDetail';
import { useState } from 'react';

const services = [
  {
    icon: Scale,
    title: 'Civil Litigation',
    description: 'Comprehensive representation in civil disputes, property matters, and contract litigation.',
    features: ['Property Disputes', 'Contract Violations', 'Debt Recovery', 'Tort Claims'],
    overview: 'Civil litigation involves a legal dispute between two or more parties that seeks monetary damages or specific performance rather than criminal sanctions.',
    whatWeOffer: ['Property Dispute Resolution', 'Contract Enforcement', 'Debt Recovery Assistance', 'Tort Claim Management'],
    process: [
      { step: 'Initial Consultation', description: 'Discuss your case specifics and our legal approach.' },
      { step: 'Case Evaluation', description: 'We thoroughly analyze the details and existing evidence.' },
      { step: 'Strategy Development', description: 'Create a personalized legal strategy for resolution.' },
      { step: 'Litigation', description: 'Represent you in court proceedings effectively.' }
    ],
    benefits: ['Experienced Legal Representation', 'Strategic Solutions', 'Effective Negotiation', 'Court Competence'],
    whenToConsult: ['Facing a property rights dispute.', 'Contract breach issues.', 'Need debt recovery support.'],
    timeline: 'Typically 6-12 months, depending on case complexity.',
    cost: 'Initial retainer of ₹50,000, then hourly billing.'
  },
  {
    icon: Shield,
    title: 'Criminal Defense',
    description: 'Experienced defense representation for all types of criminal charges.',
    features: ['Bail Applications', 'Trial Defense', 'Appeals', 'Legal Consultations'],
    overview: 'Criminal defense is focused on protecting the accused in cases involving alleged criminal activities.',
    whatWeOffer: ['Bail Application Assistance', 'Trial Preparation and Defense', 'Appeal Representation'],
    process: [
      { step: 'Initial Meeting', description: 'Understand charges and develop defense strategy.' },
      { step: 'Evidence Gathering', description: 'Collect evidence and witness testimonials.' },
      { step: 'Pre-trial Motions', description: 'Handle legal motions and pre-trial hearings.' },
      { step: 'Trial Representation', description: 'Provide defense in court hearings.' }
    ],
    benefits: ['Strong Legal Defense', 'Rights Protection', 'Court Representation'],
    whenToConsult: ['Arrested or charged with a crime.', 'Receiving a court summons.'],
    timeline: 'Varies by case; typically 3-18 months.',
    cost: 'Consultation fee of ₹10,000, detailed pricing upon review.'
  },
  {
    icon: Building,
    title: 'Corporate Law',
    description: 'Complete legal solutions for businesses and corporate entities.',
    features: ['Company Formation', 'Contract Drafting', 'Compliance', 'Mergers & Acquisitions'],
    overview: 'Corporate law encompasses the legal framework governing business organizations, including formation, operation, and dissolution.',
    whatWeOffer: ['Company Registration', 'Corporate Governance', 'Merger & Acquisition Support', 'Compliance Management'],
    process: [
      { step: 'Business Assessment', description: 'Analyze your business structure and legal needs.' },
      { step: 'Documentation', description: 'Prepare necessary legal documents and filings.' },
      { step: 'Compliance Setup', description: 'Establish ongoing compliance procedures.' },
      { step: 'Ongoing Support', description: 'Provide continuous legal guidance.' }
    ],
    benefits: ['Legal Protection', 'Business Growth Support', 'Regulatory Compliance', 'Risk Management'],
    whenToConsult: ['Starting a new business', 'Expanding operations', 'Facing regulatory issues'],
    timeline: '2-8 weeks depending on complexity',
    cost: 'Starting from ₹25,000 for basic incorporation'
  },
  {
    icon: Users,
    title: 'Family Law',
    description: 'Sensitive handling of family legal matters with care and discretion.',
    features: ['Divorce Proceedings', 'Child Custody', 'Alimony', 'Marriage Registration'],
    overview: 'Family law addresses legal issues within family relationships, including marriage, divorce, and child custody.',
    whatWeOffer: ['Divorce Representation', 'Child Custody Arrangements', 'Spousal Support', 'Property Division'],
    process: [
      { step: 'Consultation', description: 'Discuss family situation and legal options.' },
      { step: 'Documentation', description: 'Gather necessary documents and evidence.' },
      { step: 'Negotiation', description: 'Attempt amicable resolution through mediation.' },
      { step: 'Court Proceedings', description: 'Represent you in family court if needed.' }
    ],
    benefits: ['Emotional Support', 'Fair Settlements', 'Child Welfare Focus', 'Confidential Handling'],
    whenToConsult: ['Considering divorce', 'Child custody disputes', 'Domestic violence issues'],
    timeline: '3-12 months depending on case complexity',
    cost: 'Consultation fee ₹5,000, retainer from ₹30,000'
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Professional legal documentation and paperwork services.',
    features: ['Deed Preparation', 'Power of Attorney', 'Affidavits', 'Legal Notices'],
    overview: 'Legal documentation services ensure proper preparation of legal documents with accurate language and format.',
    whatWeOffer: ['Document Drafting', 'Legal Verification', 'Notarization Support', 'Document Registration'],
    process: [
      { step: 'Requirement Analysis', description: 'Understand document needs and purpose.' },
      { step: 'Drafting', description: 'Prepare documents with legal precision.' },
      { step: 'Review', description: 'Thoroughly review for accuracy and completeness.' },
      { step: 'Finalization', description: 'Complete notarization and registration.' }
    ],
    benefits: ['Legal Accuracy', 'Quick Turnaround', 'Professional Format', 'Compliance Assured'],
    whenToConsult: ['Need legal documents', 'Property transactions', 'Business agreements'],
    timeline: '1-5 days for most documents',
    cost: 'From ₹2,000 per document'
  },
{
    icon: Home,
    title: 'Real Estate',
    description: 'Complete legal assistance for property transactions and disputes.',
    features: ['Property Registration', 'Title Verification', 'Lease Agreements', 'Property Disputes'],
    overview: 'Real estate law covers all legal aspects of property ownership, transfer, and development.',
    whatWeOffer: ['Property Due Diligence', 'Title Search', 'Contract Review', 'Dispute Resolution'],
    process: [
      { step: 'Property Assessment', description: 'Evaluate property legal status and documentation.' },
      { step: 'Due Diligence', description: 'Conduct comprehensive title and legal verification.' },
      { step: 'Documentation', description: 'Prepare and review all transaction documents.' },
      { step: 'Registration', description: 'Complete property registration process.' }
    ],
    benefits: ['Clear Title', 'Legal Protection', 'Investment Security', 'Dispute Prevention'],
    whenToConsult: ['Buying/selling property', 'Property disputes', 'Title issues'],
    timeline: '2-6 weeks for transactions',
    cost: '1-2% of property value'
  },
  {
    icon: Calculator,
    title: 'Tax & VAT Legal Advice',
    description: 'Stay informed and legally protected in your tax obligations.',
    features: ['Tax Planning', 'VAT Compliance', 'Tax Disputes', 'Filing Services'],
    overview: 'Expert legal advice to navigate complex tax laws and ensure compliance with VAT regulations.',
    whatWeOffer: ['Tax Strategy Development', 'VAT Registration', 'Dispute Resolution', 'Filing Assistance'],
    process: [
      { step: 'Consultation', description: 'Analyze your financial situation and tax needs.' },
      { step: 'Planning', description: 'Develop a plan to maximize tax efficiency.' },
      { step: 'Compliance', description: 'Ensure adherence to all relevant laws and guidelines.' },
      { step: 'Filing', description: 'Assist with preparation and submission of tax documents.' }
    ],
    benefits: ['Legal Compliance', 'Informed Decision-Making', 'Financial Efficiency', 'Risk Mitigation'],
    whenToConsult: ['Needing tax planning.', 'Facing a tax audit.', 'VAT-related queries.'],
    timeline: 'Varies',
    cost: 'Determined by case complexity'
  },
  {
    icon: MessageSquare,
    title: 'Legal Consultancy',
    description: 'Strategic advice on a wide range of legal matters.',
    features: ['Business Law', 'Contract Review', 'Regulatory Advice', 'Dispute Resolution'],
    overview: 'Legal consultancy services providing insights and guidance on various legal challenges.',
    whatWeOffer: ['Business Strategy Alignment', 'Regulatory Compliance', 'Contractual Analysis', 'Risk Management'],
    process: [
      { step: 'Initial Meeting', description: 'Understand your legal concerns and objectives.' },
      { step: 'Advice and Analysis', description: 'Offer insights and detailed analysis of potential solutions.' },
      { step: 'Implementation', description: 'Assist in applying legal advice to real-world scenarios.' },
      { step: 'Follow-up', description: 'Ensure ongoing compliance and address any new issues.' }
    ],
    benefits: ['Proactive Risk Management', 'Strategic Legal Insights', 'Business Enhancement', 'Problem Resolution'],
    whenToConsult: ['Entering into new contracts', 'Expanding business operations', 'Facing complex legal issues'],
    timeline: 'Based on advisory scope',
    cost: 'Project-based pricing'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Legal <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive legal solutions tailored to meet your specific needs with professional expertise and personalized attention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 group-hover:bg-amber-500 rounded-lg p-3 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex justify-between items-center">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection('contact');
                    }}
                    className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-300 flex items-center"
                  >
                    Send Message
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="text-xs text-slate-400">Click for details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedService && 
          <ServiceDetail 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        }

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Don&apos;t see your specific legal need listed? Contact us for a consultation. We provide comprehensive legal services across various practice areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scheduleConsultation}
                className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={requestQuote}
                className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>💰</span>
                <span>Get Free Quote</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
