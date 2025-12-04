import { useState, useEffect } from "react";
import { Grid3X3, LayoutGrid, ShoppingBag, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ShopifyProductCard } from "@/components/ShopifyProductCard";
import { Button } from "@/components/ui/button";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { motion } from "framer-motion";

const Shop = () => {
  const [viewMode, setViewMode] = useState<"grid" | "large">("grid");
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts(50);
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
              Our Collection
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover handcrafted treasures made with love by skilled artisans from Arunachal Pradesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 lg:py-16">
        <div className="container-main">
          {/* View Controls */}
          <div className="flex justify-between items-center gap-4 mb-8 pb-6 border-b border-border">
            <span className="text-sm text-muted-foreground">
              {products.length} products
            </span>
            <div className="flex gap-1">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "large" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setViewMode("large")}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Loading products...</p>
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className="text-center py-20">
              <p className="text-destructive mb-4">{error}</p>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && products.length === 0 && (
            <div className="text-center py-20">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mx-auto mb-6" />
              <h2 className="text-2xl font-serif font-semibold mb-2">No products yet</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We're working on adding beautiful handcrafted products. Check back soon or tell us what product you'd like to see!
              </p>
            </div>
          )}

          {/* Products Grid */}
          {!isLoading && !error && products.length > 0 && (
            <div
              className={`grid gap-4 lg:gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {products.map((product, index) => (
                <ShopifyProductCard key={product.node.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
