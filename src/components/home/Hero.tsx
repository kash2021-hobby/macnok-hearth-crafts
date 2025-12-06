import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import categoryAccessories from "@/assets/category-accessories.webp";
import categoryLuxe from "@/assets/category-luxe.webp";
import categoryWellness from "@/assets/category-wellness.webp";
import categoryDecor from "@/assets/category-decor.webp";
import categoryBags from "@/assets/category-bags.jpg";

const HERO_IMAGES = [
  { src: categoryAccessories, alt: "Handcrafted Accessories" },
  { src: categoryLuxe, alt: "Luxe Collection" },
  { src: categoryWellness, alt: "Wellness Products" },
  { src: categoryDecor, alt: "Home Decor" },
  { src: categoryBags, alt: "Artisan Bags" },
];

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-background overflow-hidden">
      {/* Decorative mandala patterns */}
      <div className="absolute top-0 right-0 w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary/40">
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
      
      <div className="absolute top-0 left-0 w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary/40">
          <defs>
            <pattern id="mandala-left" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M20 2 L20 38 M2 20 L38 20 M6 6 L34 34 M34 6 L6 34" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <circle cx="100" cy="100" r="95" fill="url(#mandala-left)" />
        </svg>
      </div>

      {/* Main Content - Centered */}
      <div className="container-main pt-16 pb-8 lg:pt-24 lg:pb-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs md:text-sm font-medium tracking-elegant uppercase text-muted-foreground mb-4"
          >
            Handcrafted with love from Arunachal Pradesh
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-primary italic leading-[1.2] mb-6"
          >
            Embracing the Roof
            <br />
            of Arunachal
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8"
          >
            Discover authentic handcrafted treasures made by skilled women artisans, 
            preserving centuries-old traditions of Northeast India.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium tracking-wide shadow-soft transition-all duration-300 hover:shadow-card hover:bg-primary/95 group"
            >
              Shop Collection
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border/60 text-foreground rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Image Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="container-main pb-8"
      >
        <div className="flex items-end justify-center gap-3 md:gap-4 lg:gap-6 overflow-hidden">
          {HERO_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-t-2xl shadow-card flex-shrink-0 ${
                index === 2 
                  ? "w-32 md:w-48 lg:w-56 h-40 md:h-56 lg:h-64" 
                  : index === 1 || index === 3
                  ? "w-24 md:w-36 lg:w-44 h-32 md:h-44 lg:h-52"
                  : "w-20 md:w-28 lg:w-36 h-28 md:h-36 lg:h-44"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
