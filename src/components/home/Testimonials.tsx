import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Remove any existing script first
    const existingScript = document.querySelector('script[src*="reviewsonmywebsite.com"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and load the Reviews on My Website script
    const script = document.createElement("script");
    script.src = "https://reviewsonmywebsite.com/js/v2/embed.js?id=4a24b3ba631386ba5f4ec3ef018ac9ca";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      console.log("ROMW script loaded successfully");
      // Give the widget time to render
      setTimeout(() => setIsLoading(false), 2000);
    };

    script.onerror = () => {
      console.error("Failed to load ROMW script");
      setHasError(true);
      setIsLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const scriptToRemove = document.querySelector('script[src*="reviewsonmywebsite.com"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        {/* Reviews Card Container */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium tracking-wider text-primary uppercase mb-4 block">Customer Love</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
              What Our Customers Say
            </h2>
          </motion.div>

          {/* Reviews Widget Container */}
          <motion.div
            ref={containerRef}
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Loading State */}
            {isLoading && (
              <div className="space-y-4">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-5 w-5 rounded-full" />
                  ))}
                </div>
                <Skeleton className="h-24 w-full rounded-lg" />
                <div className="flex justify-center gap-4 mt-4">
                  <Skeleton className="h-32 w-64 rounded-lg" />
                  <Skeleton className="h-32 w-64 rounded-lg hidden md:block" />
                  <Skeleton className="h-32 w-64 rounded-lg hidden lg:block" />
                </div>
              </div>
            )}

            {/* Error State */}
            {hasError && (
              <div className="text-center py-8 text-muted-foreground">
                <p>Unable to load reviews at this time. Please check back later.</p>
              </div>
            )}

            {/* Reviews Widget */}
            <div 
              id="romw-widget"
              data-romw-token="fcjvXjrbOPxv4uyargVReHg9zxJijI5NciDaJV4O8QrR5rdWYw"
              className={isLoading ? "opacity-0 h-0 overflow-hidden" : "opacity-100 transition-opacity duration-500"}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
