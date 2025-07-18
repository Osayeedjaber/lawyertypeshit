import { motion } from 'framer-motion';
import { Shield, CheckCircle, Scale, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why <span className="text-amber-500">Choose Us</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Discover what makes our advocacy stand out and why hundreds have trusted us with their legal needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <Shield className="h-10 w-10 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Strong Protection</h3>
            <p className="text-slate-600">
              Your rights and interests are our top priority. We provide efficient legal defense and strategic guidance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-10 w-10 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Proven Success</h3>
            <p className="text-slate-600">
              With a track record of over 500 successful cases, our expertise is your advantage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-lg shadow-md p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <Scale className="h-10 w-10 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Balanced Approach</h3>
            <p className="text-slate-600">
              Combining the art of advocacy with robust legal acumen, ensuring thorough representation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <Heart className="h-10 w-10 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Client-Centric</h3>
            <p className="text-slate-600">
              Every case is handled with care, empathy, and commitment; putting clients first every step of the way.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
