import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    quote: "I didn't have time to figure out Wix or Squarespace. SDS just handled it. The site looks expensive, but the monthly cost is nothing compared to the new business it brings in.",
    author: "James T.",
    role: "Construction Lead",
    rating: 5
  },
  {
    quote: "Finally, a website that actually loads fast on my phone. My Instagram followers are actually clicking through now.",
    author: "Sarah K.",
    role: "Boutique Owner",
    rating: 5
  },
  {
    quote: "The best investment I've made for my cafe. They update my menu instantly when I text them. Total game changer.",
    author: "Michael R.",
    role: "Cafe Owner",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-white">Locals</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl relative hover:bg-gray-50 transition-colors shadow-sm"
            >
              <Quote className="absolute top-4 right-4 md:top-8 md:right-8 text-purple/20 w-8 h-8 md:w-10 md:h-10" />
              
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(review.rating)].map((_, r) => (
                  <Star key={r} className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6 italic leading-relaxed">
                "{review.quote}"
              </p>
              
              <div>
                <div className="font-bold text-gray-900">{review.author}</div>
                <div className="text-purple text-sm">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;