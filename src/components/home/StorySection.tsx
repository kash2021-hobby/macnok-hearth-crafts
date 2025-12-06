import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

import story1 from "@/assets/story-1.webp";
import story2 from "@/assets/story-2.webp";
import story3 from "@/assets/story-3.webp";
import story4 from "@/assets/story-4.webp";
import artisanStory from "@/assets/artisan-story.jpg";

const storyImages = [
  { src: artisanStory, alt: "Artisan at work" },
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
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
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
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {storyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      index === currentIndex
                        ? "bg-background w-6"
                        : "bg-background/50 hover:bg-background/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:pl-8"
          >
            <span className="text-sm font-medium tracking-wider text-primary uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
              Empowering Women Artisans of Arunachal Pradesh
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
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
            <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-border">
              <div>
                <span className="font-serif text-3xl font-semibold text-primary block">
                  50+
                </span>
                <span className="text-sm text-muted-foreground">Artisans</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-semibold text-primary block">
                  12
                </span>
                <span className="text-sm text-muted-foreground">Villages</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-semibold text-primary block">
                  5+
                </span>
                <span className="text-sm text-muted-foreground">Years</span>
              </div>
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/about">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
