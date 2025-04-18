
import { motion } from "framer-motion";
import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];

export function ToolsUsed() {
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
          <h2 className="text-4xl font-semibold tracking-tight text-blue-950 mb-4">
            Tools We Use
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build modern, scalable web applications
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg border border-blue-100 bg-white/80 px-20 pb-20 pt-8">
            <IconCloud iconSlugs={slugs} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
