import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigate: (page: string) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen py-16 md:py-24 container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 md:mb-8 group min-h-[44px] px-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-brand-purple" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Privacy Policy</h1>
              <p className="text-slate-400 text-sm md:text-base">Last updated: January 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-brand-navy_light/50 border border-white/5 rounded-3xl p-6 md:p-8 lg:p-12 space-y-6 md:space-y-8">
          
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">1. Introduction</h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Build With SDS ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <div className="space-y-4 text-slate-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2.1 Information You Provide</h3>
                <p className="leading-relaxed">
                  We collect information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Business information and project requirements</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communications and correspondence with us</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2.2 Automatically Collected Information</h3>
                <p className="leading-relaxed">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Device information and operating system</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-slate-300">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical updates, security alerts, and administrative messages</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-slate-300">
              <li><strong className="text-white">Service Providers:</strong> With trusted third-party service providers who assist us in operating our business</li>
              <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong className="text-white">Business Transfers:</strong> In connection with any merger, sale, or transfer of assets</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-slate-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-slate-300">
              <li>The right to access and receive a copy of your personal data</li>
              <li>The right to rectify inaccurate or incomplete information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-slate-300 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
            <p className="text-slate-300 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
            <p className="text-slate-300 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
            <p className="text-slate-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-brand-navy border border-white/5 rounded-xl">
              <p className="text-white font-medium">Build With SDS</p>
              <p className="text-slate-300">Email: hello@buildwithsds.com</p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;

