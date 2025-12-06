import { useEffect } from "react";
import { motion } from "framer-motion";

export const Testimonials = () => {
  useEffect(() => {
    // Load Reviews on My Website script
    const script = document.createElement("script");
    script.src = "https://reviewsonmywebsite.com/js/v2/embed.js?id=4a24b3ba631386ba5f4ec3ef018ac9ca";
    script.type = "text/javascript";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src*="reviewsonmywebsite.com"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-background">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium tracking-wider text-primary uppercase mb-4 block">
            Customer Love
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Reviews Widget Container */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full overflow-hidden">
            <div 
              data-romw-token="fcjvXjrbOPxv4uyargVReHg9zxJijI5NciDaJV4O8QrR5rdWYw" 
              data-romw-lazy
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
