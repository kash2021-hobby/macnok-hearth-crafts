import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ChevronLeft, Minus, Plus, ShoppingCart, Loader2 } from "lucide-react";

const ShopifyProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const addItem = useCartStore((state) => state.addItem);
  const setCartOpen = useCartStore((state) => state.setCartOpen);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      
      try {
        setIsLoading(true);
        const data = await fetchProductByHandle(handle);
        setProduct(data);
        if (data?.variants?.edges?.[0]) {
          setSelectedVariant(data.variants.edges[0].node);
        }
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions || [],
    });

    toast.success(`${product.title} added to cart`, {
      position: "top-center",
    });
    setCartOpen(true);
  };

  const formatPrice = (amount: string, currencyCode: string) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
    }).format(parseFloat(amount));
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container-main py-20 flex flex-col items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground">Loading product...</p>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container-main py-20 text-center">
          <h1 className="text-2xl font-serif mb-4">Product not found</h1>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const images = product.images?.edges || [];
  const variants = product.variants?.edges || [];

  return (
    <Layout>
      <div className="container-main py-8 lg:py-12">
        {/* Breadcrumb */}
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              {images[selectedImage]?.node ? (
                <img
                  src={images[selectedImage].node.url}
                  alt={images[selectedImage].node.altText || product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-muted-foreground">No image</span>
                </div>
              )}
            </div>
            
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                      selectedImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={image.node.url}
                      alt={image.node.altText || `${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
                {product.title}
              </h1>
              <p className="text-3xl font-bold text-primary">
                {selectedVariant && formatPrice(selectedVariant.price.amount, selectedVariant.price.currencyCode)}
              </p>
            </div>

            {/* Variant Selection */}
            {product.options?.length > 0 && product.options[0].name !== "Title" && (
              <div className="space-y-4">
                {product.options.map((option: any) => (
                  <div key={option.name}>
                    <label className="text-sm font-medium mb-2 block">{option.name}</label>
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((value: string) => {
                        const matchingVariant = variants.find((v: any) =>
                          v.node.selectedOptions.some(
                            (opt: any) => opt.name === option.name && opt.value === value
                          )
                        );
                        const isSelected = selectedVariant?.selectedOptions?.some(
                          (opt: any) => opt.name === option.name && opt.value === value
                        );

                        return (
                          <Button
                            key={value}
                            variant={isSelected ? "default" : "outline"}
                            size="sm"
                            onClick={() => matchingVariant && setSelectedVariant(matchingVariant.node)}
                            disabled={!matchingVariant?.node.availableForSale}
                          >
                            {value}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="text-sm font-medium mb-2 block">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full"
              disabled={!selectedVariant?.availableForSale}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {selectedVariant?.availableForSale ? "Add to Cart" : "Out of Stock"}
            </Button>

            {/* Description */}
            {product.description && (
              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopifyProductDetail;
