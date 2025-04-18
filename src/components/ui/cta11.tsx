
import { Button } from "@/components/ui/button";

interface Cta11Props {
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      onClick: () => void;
    };
    secondary?: {
      text: string;
      onClick: () => void;
    };
  };
}

const Cta11 = ({
  heading = "Ready to Get Started?",
  description = "Join thousands of satisfied customers using our platform to build amazing websites.",
  buttons = {
    primary: {
      text: "Get Started",
      onClick: () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    secondary: {
      text: "Learn More",
      onClick: () => {
        const howItWorksSection = document.getElementById('how-it-works');
        if (howItWorksSection) {
          howItWorksSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
  },
}: Cta11Props) => {
  return (
    <section className="py-32">
      <div className="container flex items-center justify-center">
        <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
          <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            {buttons.secondary && (
              <Button variant="outline" className="w-full sm:w-auto" onClick={buttons.secondary.onClick}>
                {buttons.secondary.text}
              </Button>
            )}
            {buttons.primary && (
              <Button className="w-full sm:w-auto" onClick={buttons.primary.onClick}>
                {buttons.primary.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta11 };
