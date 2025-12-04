import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoriesProps {
  className?: string;
}

export const Categories = ({ className }: CategoriesProps) => {
  return (
    <section className={cn("py-20 lg:py-28", className)}>
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our curated collection of handcrafted treasures, each piece telling a unique story.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/shop?category=${category.slug}`}
                className="group block relative aspect-[4/5] rounded-2xl overflow-hidden hover-lift"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl lg:text-2xl font-semibold text-background mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-background/80 line-clamp-2">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
