
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const demos = [
  {
    title: "Travel Agency Demo",
    button: "View Demo",
    url: "https://wanderwaytravel.netlify.app/",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3874&auto=format&fit=crop",
  },
  {
    title: "Dental Clinic Demo",
    button: "View Demo",
    url: "https://brightsmile-landing-page.lovable.app/",
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=3870&auto=format&fit=crop",
  }
];

export function DemoSites() {
  return (
    <section className="py-24 bg-white" id="demo">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-blue-950 mb-4">
            Explore Our Live Demos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how we can transform your online presence
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demos.map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <img
                    src={demo.src}
                    alt={demo.title}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-center h-full">
                      <a href={demo.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" className="gap-2">
                          {demo.button}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-medium text-blue-950">{demo.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="hidden">
            <Button variant="outline" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
