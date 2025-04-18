import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    id: "1",
    question: "How long does it take?",
    answer: "3–5 days for landing pages, 7–10 for full sites.",
  },
  {
    id: "2",
    question: "What's included in SEO?",
    answer: "Keyword research, on-page SEO, Analytics & Console setup.",
  },
  {
    id: "3",
    question: "Do you offer post‑launch support?",
    answer: "30-day free support + affordable plans.",
  },
  {
    id: "4",
    question: "Can I integrate third-party services?",
    answer: "Yes, we support integration with various APIs and services.",
  },
  {
    id: "5",
    question: "Do you provide hosting services?",
    answer: "Yes, we offer reliable hosting with 24/7 monitoring.",
  }
];

export function FAQ() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32">
      <div className="container space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-3xl flex-col text-left md:text-center"
        >
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground lg:text-lg">
            Everything you need to know about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion
            type="single"
            collapsible
            className="mx-auto w-full lg:max-w-3xl"
          >
            {faqs.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                  <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="sm:mb-1 lg:mb-2">
                  <div className="text-muted-foreground lg:text-lg">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8"
        >
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Support Team Member 1" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Support Team Member 2" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Support Team Member 3" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
            Need more support?
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <a href="mailto:lalbasha@automatea2z.in">
              <Button className="w-full sm:w-auto">
                Contact Support
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
