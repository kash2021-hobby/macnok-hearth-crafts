import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import categoryAccessories from "@/assets/category-accessories.webp";
import categoryLuxe from "@/assets/category-luxe.webp";
import categoryWellness from "@/assets/category-wellness.webp";
import categoryDecor from "@/assets/category-decor.webp";

const HERO_IMAGES = [
  { src: categoryAccessories, alt: "Handcrafted Accessories" },
  { src: categoryLuxe, alt: "Luxe Collection" },
  { src: categoryWellness, alt: "Wellness Products" },
  { src: categoryDecor, alt: "Home Decor" },
];

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-background overflow-hidden">
      <div className="container-main py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block text-xs font-medium tracking-elegant uppercase text-primary border border-primary/30 px-4 py-2 rounded-full"
              >
                Handcrafted with love from Arunachal Pradesh
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight text-foreground leading-[1.1]"
              >
                Embracing the
                <br />
                <span className="text-primary italic">Roof of Arunachal</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md"
              >
                Discover authentic handcrafted treasures made by skilled women artisans, 
                preserving centuries-old traditions of Northeast India.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
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
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {HERO_IMAGES.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className={`relative overflow-hidden rounded-2xl shadow-card ${
                    index % 2 === 1 ? "mt-8" : ""
                  }`}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-20 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
