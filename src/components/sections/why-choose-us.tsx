import { motion } from "framer-motion";
import { TiltedScroll } from "@/components/ui/tilted-scroll";

const benefits = [
  {
    id: "1",
    text: "Blazing Fast Delivery - Sites live in 3–5 days",
  },
  {
    id: "2",
    text: "Data-Driven Design for Maximum Conversion",
  },
  {
    id: "3",
    text: "AI-Powered 24/7 Customer Engagement",
  },
  {
    id: "4",
    text: "All-In-One Solution, Managed in One Place",
  },
  {
    id: "5",
    text: "Optimized for Search Engines (SEO)",
  },
  {
    id: "6",
    text: "Continuous Support and Maintenance",
  },
  {
    id: "7",
    text: "Mobile-First Responsive Design",
  },
  {
    id: "8",
    text: "Secure and Scalable Infrastructure",
  },
  // Duplicate items for continuous scrolling
  {
    id: "9",
    text: "Blazing Fast Delivery - Sites live in 3–5 days",
  },
  {
    id: "10",
    text: "Data-Driven Design for Maximum Conversion",
  },
  {
    id: "11",
    text: "AI-Powered 24/7 Customer Engagement",
  },
  {
    id: "12",
    text: "All-In-One Solution, Managed in One Place",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white" id="why-us">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-blue-950 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your website is often the first impression—make it unforgettable
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <TiltedScroll items={benefits} />
        </motion.div>
      </div>
    </section>
  );
}
