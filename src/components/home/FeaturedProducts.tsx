import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopifyProductCard } from "@/components/ShopifyProductCard";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  limit?: number;
}

export const FeaturedProducts = ({
  title,
  subtitle,
  limit = 4,
}: FeaturedProductsProps) => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts(limit);
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [limit]);

  // Don't render the section if there are no products and not loading
  if (!isLoading && products.length === 0) {
    return null;
  }

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
            <Link to="/shop">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product, index) => (
              <ShopifyProductCard key={product.node.id} product={product} index={index} showBorderAnimation />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
