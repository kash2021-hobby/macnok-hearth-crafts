import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoriesProps {
  className?: string;
}

export const Categories = ({ className }: CategoriesProps) => {
  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4 block">
            Collections
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-medium mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
            Explore our curated collection of handcrafted treasures, each piece telling a unique story.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link
                to={{
                  pathname: "/shop",
                  search: `category=${category.slug}`,
                }}
                className="group block relative aspect-[4/5] rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <h3 className="font-serif text-lg lg:text-xl font-medium text-background mb-1 tracking-wide">
                    {category.name}
                  </h3>
                  <p className="text-sm text-background/80 line-clamp-2 leading-relaxed">
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