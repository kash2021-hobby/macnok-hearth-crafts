import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const StorySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                alt="Artisan at work"
                className="w-full h-full object-cover"
                src="/lovable-uploads/f0e6c69a-54b5-4b06-9d0a-30e61baa5172.webp"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:pl-8"
          >
            <span className="text-sm font-medium tracking-wider text-accent uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-6 leading-tight text-foreground">
              A Story of Community and Craftsmanship
            </h2>
            <div className="space-y-6 text-muted-foreground mb-8 leading-relaxed">
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

            <Button variant="outline" size="lg" asChild className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/about">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};