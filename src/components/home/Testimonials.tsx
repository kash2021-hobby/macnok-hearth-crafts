import { useEffect } from "react";
import { motion } from "framer-motion";

export const Testimonials = () => {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
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

        {/* Elfsight Google Reviews Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div 
            className="elfsight-app-849aa639-c896-4996-bee5-856df809bd2a" 
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>
    </section>
  );
};
