import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import artisanWeaving from "@/assets/artisan-weaving.jpg";
import categoryAccessories from "@/assets/category-accessories.webp";
import categoryLuxe from "@/assets/category-luxe.webp";
import categoryWellness from "@/assets/category-wellness.webp";
import categoryDecor from "@/assets/category-decor.webp";

const RIGHT_IMAGES = [
  { src: categoryAccessories, alt: "Handcrafted Accessories" },
  { src: categoryLuxe, alt: "Luxe Collection" },
  { src: categoryWellness, alt: "Wellness Products" },
  { src: categoryDecor, alt: "Home Decor" },
];

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] bg-primary overflow-hidden">
      {/* Decorative mandala pattern - right side */}
      <div className="absolute top-0 right-0 w-64 md:w-96 lg:w-[500px] h-64 md:h-96 lg:h-[500px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary-foreground">
          <defs>
            <pattern id="mandala-right" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M20 2 L20 38 M2 20 L38 20 M6 6 L34 34 M34 6 L6 34" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <circle cx="100" cy="100" r="95" fill="url(#mandala-right)" />
        </svg>
      </div>

      <div className="container-main py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh]">
          
          {/* Left - Artisan Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={artisanWeaving}
                alt="Artisan weaving traditional handloom"
                className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Center - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4 text-center space-y-6"
          >
            <span className="text-xs md:text-sm font-medium tracking-elegant uppercase text-primary-foreground/80">
              Connect with the
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground italic leading-[1.2]">
              Artisans & Weavers
            </h1>
            
            <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed uppercase tracking-wide">
              And get the opportunity to indulge in the real world of
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-primary-foreground italic">
              Handmade
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-4"
            >
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-full text-sm font-medium tracking-wide shadow-soft transition-all duration-300 hover:shadow-card hover:bg-primary-foreground/95 group"
              >
                Shop Collection
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 pt-6">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary-foreground' : 'bg-primary-foreground/40'}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Stacked Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col gap-4 items-end"
          >
            {RIGHT_IMAGES.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className={`relative overflow-hidden rounded-xl shadow-card border-4 border-primary-foreground/20 ${
                  index === 0 ? "w-28 md:w-36 lg:w-40 h-28 md:h-36 lg:h-40 mr-8" :
                  index === 1 ? "w-24 md:w-32 lg:w-36 h-24 md:h-32 lg:h-36 mr-4" :
                  index === 2 ? "w-28 md:w-36 lg:w-40 h-28 md:h-36 lg:h-40 mr-12" :
                  "w-24 md:w-32 lg:w-36 h-24 md:h-32 lg:h-36 mr-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
