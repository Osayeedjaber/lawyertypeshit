'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Meet Your <span className="text-amber-500">Legal Advocate</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            Where Legal Excellence Meets Compassionate Service. For over 13 years, I&apos;ve been defending rights,
            protecting interests, and delivering justice with unwavering dedication and professional integrity.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-200 to-slate-300">
                <Image 
                  src="/shahadat.jpg" 
                  alt="Advocate Md. Shahadat Hossain" 
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-slate-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-16 w-16 text-white" />
                    </div>
                    <p className="text-slate-600 text-lg">Professional Photo</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <Award className="h-12 w-12 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Md. Shahadat Hossain
            </h3>
            
            <div className="space-y-4">
              <p className="text-lg text-slate-600 leading-relaxed">
                With over 13 years of courtroom experience, Advocate Md. Shahadat Hossain is a trusted legal professional based in Dhaka, Bangladesh. He specializes in Criminal Law, Civil Litigation, Family Law, Corporate & Contract Law, and also offers expert support in Tax, Notary, Translation, and Ministry-related Legal Services.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                As a member of the Dhaka Bar Association, he is known for his honest guidance, strategic legal thinking, and client-first approach. His chambers are located at both Dhaka Judge Court and Savar, allowing him to assist clients across a wide geographical area.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Holding both LL.B and LL.M degrees, Advocate Shahadat brings academic excellence alongside practical experience — giving clients a balanced and knowledgeable perspective on every case.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 rounded-lg p-3">
                  <GraduationCap className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Education</h4>
                  <p className="text-slate-600">LL.B (Hons), LL.M</p>
                  <p className="text-slate-600">Uttara University</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 rounded-lg p-3">
                  <BookOpen className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Bar Admission</h4>
                  <p className="text-slate-600">Bangladesh Bar Council</p>
                  <p className="text-slate-600">Licensed since 2011</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-slate-900 mb-3">Professional Memberships</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-600">Bangladesh Bar Council</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-600">Dhaka Bar Association</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
