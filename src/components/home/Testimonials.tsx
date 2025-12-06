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
    <section className="py-20 lg:py-28">
      <div className="container-main">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium tracking-wider text-primary uppercase mb-4 block">
            Customer Love
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold">
            What Our Community Says
          </h2>
        </motion.div>

        {/* Reviews on My Website Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div 
            data-romw-token="fcjvXjrbOPxv4uyargVReHg9zxJijI5NciDaJV4O8QrR5rdWYw" 
            data-romw-lazy
          />
        </motion.div>
      </div>
    </section>
  );
};
