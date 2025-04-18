
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a
              href="mailto:lalbasha@automatea2z.in"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              lalbasha@automatea2z.in
            </a>
            <span className="hidden md:inline text-slate-400">•</span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/sai-siva-manikanta-madem-ab5b84258/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>Sai</span>
              </a>
              <a
                href="https://www.linkedin.com/in/lal-basha-shaik/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>Lal</span>
              </a>
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            © 2025 Instant Web. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
