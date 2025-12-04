import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, Grid3X3, LayoutGrid } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import { motion } from "framer-motion";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "large">("grid");
  
  const categoryFilter = searchParams.get("category");
  const typeFilter = searchParams.get("filter");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }

    if (typeFilter === "new") {
      result = result.filter((p) => p.isNew);
    } else if (typeFilter === "bestseller") {
      result = result.filter((p) => p.isBestSeller);
    }

    return result;
  }, [categoryFilter, typeFilter]);

  const clearFilters = () => {
    setSearchParams({});
  };

  const setCategory = (slug: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }
    params.delete("filter");
    setSearchParams(params);
  };

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
              {categoryFilter
                ? categories.find((c) => c.slug === categoryFilter)?.name || "Shop"
                : typeFilter === "new"
                ? "New Arrivals"
                : typeFilter === "bestseller"
                ? "Best Sellers"
                : "Our Collection"}
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover handcrafted treasures made with love by skilled artisans from Arunachal Pradesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12 lg:py-16">
        <div className="container-main">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-border">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={!categoryFilter && !typeFilter ? "default" : "outline"}
                size="sm"
                onClick={clearFilters}
              >
                All
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={categoryFilter === cat.slug ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategory(cat.slug)}
                >
                  {cat.name}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products
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
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div
              className={`grid gap-4 lg:gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Filter className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">No products found</p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
