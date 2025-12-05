import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Grid3X3, LayoutGrid, ShoppingBag, Loader2, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ShopifyProductCard } from "@/components/ShopifyProductCard";
import { Button } from "@/components/ui/button";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { motion } from "framer-motion";
import { categories } from "@/data/products";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "large">("grid");
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = searchParams.get("category");
  const productType = searchParams.get("type");

  // Build Shopify query based on URL params
  const shopifyQuery = useMemo(() => {
    const queryParts: string[] = [];
    
    if (category) {
      queryParts.push(`tag:${category}`);
    }
    
    if (productType) {
      queryParts.push(`product_type:"${productType}"`);
    }
    
    return queryParts.length > 0 ? queryParts.join(" AND ") : undefined;
  }, [category, productType]);

  // Get current category info
  const currentCategory = categories.find(c => c.slug === category);

  // Extract unique product types (subcategories) from products
  const subcategories = useMemo(() => {
    const types = new Set<string>();
    products.forEach(product => {
      if (product.node.productType) {
        types.add(product.node.productType);
      }
    });
    return Array.from(types).sort();
  }, [products]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchProducts(50, shopifyQuery);
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [shopifyQuery]);

  // Page title based on filters
  const pageTitle = productType 
    ? productType 
    : currentCategory?.name || "Our Collection";

  const pageDescription = productType
    ? `Browse our ${productType} collection`
    : currentCategory?.description || "Discover handcrafted treasures made with love by skilled artisans from Arunachal Pradesh.";

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
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/shop" className="hover:text-foreground transition-colors">
                All Products
              </Link>
              {category && (
                <>
                  <ChevronRight className="h-4 w-4" />
                  <Link 
                    to={`/shop?category=${category}`}
                    className={`hover:text-foreground transition-colors ${!productType ? 'text-foreground font-medium' : ''}`}
                  >
                    {currentCategory?.name || category}
                  </Link>
                </>
              )}
              {productType && (
                <>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-foreground font-medium">{productType}</span>
                </>
              )}
            </nav>

            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
              {pageTitle}
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {pageDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 lg:py-16">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Subcategory Filter */}
            {category && !isLoading && subcategories.length > 0 && (
              <aside className="lg:w-56 flex-shrink-0">
                <div className="sticky top-24">
                  <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    Filter by Type
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to={`/shop?category=${category}`}
                        className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                          !productType
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        All {currentCategory?.name}
                      </Link>
                    </li>
                    {subcategories.map((type) => (
                      <li key={type}>
                        <Link
                          to={`/shop?category=${category}&type=${encodeURIComponent(type)}`}
                          className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                            productType === type
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted"
                          }`}
                        >
                          {type}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}

            {/* Main Content */}
            <div className="flex-1">
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
                  <h2 className="text-2xl font-serif font-semibold mb-2">
                    No products found
                  </h2>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    {category
                      ? `We don't have any products in ${currentCategory?.name || category} yet.`
                      : "We're working on adding beautiful handcrafted products."}
                  </p>
                  {category && (
                    <Button asChild variant="outline">
                      <Link to="/shop">View All Products</Link>
                    </Button>
                  )}
                </div>
              )}

              {/* Products Grid */}
              {!isLoading && !error && products.length > 0 && (
                <div
                  className={`grid gap-4 lg:gap-6 ${
                    viewMode === "grid"
                      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                      : "grid-cols-1 md:grid-cols-2"
                  }`}
                >
                  {products.map((product, index) => (
                    <ShopifyProductCard key={product.node.id} product={product} index={index} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
