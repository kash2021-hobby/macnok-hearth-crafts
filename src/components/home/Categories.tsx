import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CategoriesProps {
  className?: string;
}

export const Categories = ({ className }: CategoriesProps) => {
  return (
    <section className={cn("py-20 lg:py-28 bg-background", className)}>
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4 text-foreground">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our curated collection of handcrafted treasures, each piece telling a unique story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={{
                  pathname: "/shop",
                  search: `category=${category.slug}`
                }}
                className="group block bg-card border-2 border-accent/30 rounded-lg p-8 text-center card-hover"
              >
                <div className="aspect-square mb-6 rounded-lg overflow-hidden bg-background">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <h3 className="font-serif text-lg lg:text-xl font-medium text-foreground">
                    {category.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};