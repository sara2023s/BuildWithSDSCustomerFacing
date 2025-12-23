import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsOfServiceProps {
  onNavigate: (page: string) => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
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
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 md:mb-8 group min-h-[44px] px-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-purple/10 border border-purple/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 md:w-6 md:h-6 text-purple" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">Terms of Service</h1>
              <p className="text-gray-600 text-sm md:text-base">Last updated: January 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 lg:p-12 space-y-6 md:space-y-8 shadow-sm">
          
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              By accessing or using the services provided by Build With SDS ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Build With SDS provides web development and design services, including but not limited to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Custom website design and development</li>
              <li>Website hosting and maintenance services</li>
              <li>Content updates and modifications</li>
              <li>Technical support and consultation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Plans and Pricing</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Our services are offered through subscription plans with monthly fees. All plans include a one-time setup fee unless otherwise specified. Pricing is displayed in New Zealand Dollars (NZD) and may be subject to GST.
              </p>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <p className="text-gray-900 font-semibold mb-2">Payment Terms:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Monthly fees are billed in advance</li>
                  <li>Setup fees are charged upon project initiation</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>Prices may be updated with 30 days notice</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Project Timeline and Deliverables</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Standard project turnaround time is 5-7 business days from project initiation, subject to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Receipt of all required materials and content from the client</li>
              <li>Client approval of design mockups and specifications</li>
              <li>Complexity and scope of the project</li>
              <li>Client responsiveness to feedback and revision requests</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Provide accurate and complete information necessary for project completion</li>
              <li>Respond to requests for feedback and approvals in a timely manner</li>
              <li>Provide all content, images, and materials required for the project</li>
              <li>Ensure you have rights to all content and materials provided</li>
              <li>Make timely payments as agreed in your service plan</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6.1 Client Content</h3>
                <p className="leading-relaxed">
                  You retain all rights to content, images, and materials you provide to us. By providing such materials, you grant us a license to use them solely for the purpose of providing our services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6.2 Deliverables</h3>
                <p className="leading-relaxed">
                  Upon full payment, you will receive ownership of the custom website and design deliverables created specifically for your project. We retain the right to use the work for portfolio and marketing purposes unless otherwise agreed.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6.3 Third-Party Components</h3>
                <p className="leading-relaxed">
                  Websites may include third-party components, frameworks, or libraries subject to their respective licenses. You are responsible for compliance with these licenses.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cancellation and Refunds</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                You may cancel your subscription at any time after the initial 12-month commitment period. Cancellation requests must be submitted in writing.
              </p>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <p className="text-gray-900 font-semibold mb-2">Refund Policy:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Setup fees are non-refundable</li>
                  <li>Monthly fees are non-refundable for the current billing period</li>
                  <li>No refunds for services already rendered</li>
                  <li>Refunds, if applicable, will be processed within 30 business days</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability and Maintenance</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We strive to maintain high service availability but do not guarantee uninterrupted access. Scheduled maintenance will be communicated in advance when possible. We are not liable for:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Temporary service interruptions</li>
              <li>Third-party service outages (hosting, domain providers, etc.)</li>
              <li>Issues caused by client modifications or third-party integrations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, Build With SDS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Build With SDS from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services, violation of these Terms, or infringement of any rights of another.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications to Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part of our services at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of New Zealand, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of New Zealand.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <p className="text-gray-900 font-medium">Build With SDS</p>
              <p className="text-gray-700">Email: hello@buildwithsds.com</p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default TermsOfService;

