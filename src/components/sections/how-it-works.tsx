import { motion, AnimatePresence } from "framer-motion";
import { Search, Rocket, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    step: "Research",
    title: "Research",
    content: "Deep dive into brand, audience, and goals",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    icon: Search,
    description: "We analyze your business needs and target audience to create a strategy that aligns perfectly with your goals."
  },
  {
    step: "Rapid Build",
    title: "Rapid Build",
    content: "Concept → Live in days",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2069",
    icon: Rocket,
    description: "Transform your vision into reality with our streamlined development process. Quality meets speed."
  },
  {
    step: "Refine",
    title: "Refine",
    content: "Iterate using feedback + analytics",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
    icon: RefreshCw,
    description: "Continuous optimization based on real user feedback and analytics for maximum impact."
  },
];

export function HowItWorks() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoPlayInterval = 4000;

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Our 3R's Principle for Success
          </p>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="order-2 md:order-1 space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-6"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-8">
                  <motion.div
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center border-2 shadow-lg",
                      index === currentFeature
                        ? "bg-blue-100 border-blue-500 text-blue-600 scale-110"
                        : "bg-slate-100 border-slate-200 text-slate-400"
                    )}
                  >
                    <feature.icon className="w-7 h-7" />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-slate-700 font-medium">{feature.content}</p>
                  </div>
                </div>
                <div className="pl-24">
                  <p className="text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="order-1 md:order-2 relative h-[300px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
