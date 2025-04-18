import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlowEffect } from "@/components/ui/glow-effect";
import { TextMorph } from "@/components/ui/text-morph";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://hook.eu2.make.com/qrghk83iswdz54gwuqlrk4qspiako37t", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "no-cors" // Required for Make.com webhooks
      });

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        businessName: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white" id="contact">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-blue-950 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Fill out the form below or schedule a 15‑min strategy call
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 opacity-50">
              <GlowEffect
                colors={["#0894FF", "#C959DD", "#FF2E54", "#FF9004"]}
                mode="colorShift"
                blur="medium"
                duration={4}
                scale={1.05}
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="relative backdrop-blur-sm bg-white/80 p-8 rounded-2xl border border-blue-200/50 shadow-lg space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/70 border-blue-200/50 focus:border-blue-300 transition-all duration-200 hover:bg-white/90"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/70 border-blue-200/50 focus:border-blue-300 transition-all duration-200 hover:bg-white/90"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Input
                  type="text"
                  name="businessName"
                  placeholder="Business Name"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="bg-white/70 border-blue-200/50 focus:border-blue-300 transition-all duration-200 hover:bg-white/90"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/70 border border-blue-200/50 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition-all duration-200 hover:bg-white/90"
                ></textarea>
              </motion.div>

              <div className="flex flex-col items-center gap-4">
                <Button type="submit" className="w-full relative overflow-hidden group">
                  <TextMorph>
                    {isSubmitting ? "Submitting..." : "Submit & Get Started"}
                  </TextMorph>
                </Button>
                <span className="text-slate-600">or</span>
                <a 
                  href="https://calendly.com/lalbashaautomates/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    type="button"
                    className="gap-2 w-full group relative overflow-hidden transition-all duration-200 hover:bg-blue-50/50"
                  >
                    <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
                    Schedule a Call
                  </Button>
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
