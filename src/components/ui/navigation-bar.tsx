
"use client";

import { Home, Briefcase, CheckCircle, Rocket, Phone } from "lucide-react";

const NavigationBar = () => {
  const handleClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: offsetTop - 100, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed sm:top-0 bottom-0 sm:bottom-auto left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto sm:pt-6">
      <div className="flex items-center justify-center gap-2 sm:gap-3 bg-white/90 dark:bg-gray-900/90 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative p-3 sm:px-6 rounded-full text-foreground/80 hover:text-primary transition-colors hover:bg-muted"
        >
          <span className="hidden md:inline">Home</span>
          <span className="md:hidden"><Home size={18} strokeWidth={2.5} /></span>
        </button>
        <button
          onClick={() => handleClick("#services")}
          className="relative p-3 sm:px-6 rounded-full text-foreground/80 hover:text-primary transition-colors hover:bg-muted"
        >
          <span className="hidden md:inline">Services</span>
          <span className="md:hidden"><Briefcase size={18} strokeWidth={2.5} /></span>
        </button>
        <button
          onClick={() => handleClick("#why-us")}
          className="relative p-3 sm:px-6 rounded-full text-foreground/80 hover:text-primary transition-colors hover:bg-muted"
        >
          <span className="hidden md:inline">Why Us</span>
          <span className="md:hidden"><CheckCircle size={18} strokeWidth={2.5} /></span>
        </button>
        <button
          onClick={() => handleClick("#demo")}
          className="relative p-3 sm:px-6 rounded-full text-foreground/80 hover:text-primary transition-colors hover:bg-muted"
        >
          <span className="hidden md:inline">Get Started</span>
          <span className="md:hidden"><Rocket size={18} strokeWidth={2.5} /></span>
        </button>
        <button
          onClick={() => handleClick("#contact")}
          className="relative p-3 sm:px-6 rounded-full text-foreground/80 hover:text-primary transition-colors hover:bg-muted"
        >
          <span className="hidden md:inline">Contact</span>
          <span className="md:hidden"><Phone size={18} strokeWidth={2.5} /></span>
        </button>
      </div>
    </nav>
  );
};

export { NavigationBar };
