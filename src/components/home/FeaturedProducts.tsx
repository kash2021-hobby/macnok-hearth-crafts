import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  filter?: "new" | "bestseller" | "all";
  limit?: number;
}

export const FeaturedProducts = ({
  title,
  subtitle,
  filter = "all",
  limit = 4,
}: FeaturedProductsProps) => {
  let filteredProducts = products;

  if (filter === "new") {
    filteredProducts = products.filter((p) => p.isNew);
  } else if (filter === "bestseller") {
    filteredProducts = products.filter((p) => p.isBestSeller);
  }

  const displayProducts = filteredProducts.slice(0, limit);

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <Button variant="ghost" asChild className="group">
            <Link to={`/shop${filter !== "all" ? `?filter=${filter}` : ""}`}>
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {displayProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
