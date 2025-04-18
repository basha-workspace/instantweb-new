import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import {
  Box,
  BarChart,
  Brain,
  Code2,
  Cpu,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Box,
    title: "One‑Page Landing Sites",
    description: "Lightning-fast, conversion-focused landing pages built in days.",
  },
  {
    icon: BarChart,
    title: "SEO Optimization",
    description: "Boost visibility with expert SEO setup and analytics integration.",
  },
  {
    icon: Brain,
    title: "AI Chatbot & Voice Caller Bot",
    description: "Intelligent AI agents that engage visitors 24/7.",
  },
  {
    icon: Cpu,
    title: "AI Automations",
    description: "Streamline operations with smart AI-powered workflows.",
  },
  {
    icon: Code2,
    title: "API Integrations",
    description: "Seamless connections with your essential business tools.",
  },
  {
    icon: Wrench,
    title: "Ongoing Maintenance",
    description: "Keep your site fast, secure, and up-to-date.",
  },
];

const Feature = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: any;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group flex flex-col lg:border-r py-10 relative hover:scale-105 transition-transform duration-300",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 to-transparent pointer-events-none"
        />
      )}
      {index >= 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"
        />
      )}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="mb-4 relative z-10 px-10 text-blue-600"
      >
        <Icon className="h-6 w-6" />
      </motion.div>
      
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "0.25rem" }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-blue-200 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center"
        />
        <TypewriterEffect text={title} />
      </div>
      <p className="text-sm text-slate-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white" id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-semibold tracking-tight text-blue-950 mb-4">
          Our Services
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Everything you need to launch and grow your online presence
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto bg-white rounded-xl shadow-sm">
        {services.map((service, index) => (
          <Feature 
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
