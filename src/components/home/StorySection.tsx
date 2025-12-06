import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

import story1 from "@/assets/story-1.webp";
import story2 from "@/assets/story-2.webp";
import story3 from "@/assets/story-3.webp";
import story4 from "@/assets/story-4.webp";
import artisanStory from "@/assets/artisan-story.webp";

const storyImages = [
  { src: artisanStory, alt: "Woman wearing artisan jewelry and accessories" },
  { src: story1, alt: "Happy customer with artisan jewelry" },
  { src: story2, alt: "Customer wearing handmade necklace" },
  { src: story3, alt: "Artisans crafting together" },
  { src: story4, alt: "Young woman with beaded headband" },
];

export const StorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % storyImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + storyImages.length) % storyImages.length);
  }, []);

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative shadow-card">
              {storyImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer shadow-soft"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer shadow-soft"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {storyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex
                        ? "bg-background w-6"
                        : "bg-background/50 w-1.5 hover:bg-background/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-accent/10 rounded-full -z-10" />
            <div className="absolute -top-8 -left-8 w-28 h-28 bg-primary/5 rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:pl-4"
          >
            <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-5 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium mb-6 leading-tight">
              Empowering Women Artisans of Arunachal Pradesh
            </h2>
            <div className="space-y-4 text-muted-foreground mb-10 text-base leading-relaxed">
              <p>
                Founded by Ninna Lego, House of Macnok is more than a brand—it's a
                movement to preserve and celebrate the rich cultural heritage of
                Northeast India's indigenous communities.
              </p>
              <p>
                Each piece in our collection is handcrafted by skilled women artisans,
                using techniques passed down through generations. By choosing House of
                Macnok, you're not just buying a product; you're supporting sustainable
                livelihoods and keeping ancient traditions alive.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-10 py-8 border-y border-border/60">
              <div>
                <span className="font-serif text-3xl lg:text-4xl font-medium text-primary block">
                  50+
                </span>
                <span className="text-sm text-muted-foreground mt-1 block">Artisans</span>
              </div>
              <div>
                <span className="font-serif text-3xl lg:text-4xl font-medium text-primary block">
                  12
                </span>
                <span className="text-sm text-muted-foreground mt-1 block">Villages</span>
              </div>
              <div>
                <span className="font-serif text-3xl lg:text-4xl font-medium text-primary block">
                  5+
                </span>
                <span className="text-sm text-muted-foreground mt-1 block">Years</span>
              </div>
            </div>

            <Button variant="hero" size="lg" asChild className="group">
              <Link to="/about">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};