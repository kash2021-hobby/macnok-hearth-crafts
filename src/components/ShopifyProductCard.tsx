import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
interface ShopifyProductCardProps {
  product: ShopifyProduct;
  index?: number;
}
export const ShopifyProductCard = ({
  product,
  index = 0
}: ShopifyProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const setCartOpen = useCartStore(state => state.setCartOpen);
  const {
    node
  } = product;
  const price = parseFloat(node.priceRange.minVariantPrice.amount);
  const currency = node.priceRange.minVariantPrice.currencyCode;
  const image = node.images.edges[0]?.node;
  const firstVariant = node.variants.edges[0]?.node;
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!firstVariant) {
      toast.error("This product is currently unavailable");
      return;
    }
    addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || []
    });
    toast.success(`${node.title} added to cart`, {
      position: "top-center"
    });
    setCartOpen(true);
  };
  const formatPrice = (amount: number, currencyCode: string) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0
    }).format(amount);
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    delay: index * 0.1
  }} className="group">
      <Link to={`/product/${node.handle}`} className="block">
        <div className="relative overflow-hidden rounded-3xl bg-muted aspect-square mb-4">
          {image ? <img src={image.url} alt={image.altText || node.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 border-primary border-2 group-hover:border-transparent" /> : <div className="w-full h-full flex items-center justify-center bg-muted">
              <span className="text-muted-foreground">No image</span>
            </div>}
          
          {/* Quick Add Button */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Button onClick={handleAddToCart} className="w-full bg-background/95 backdrop-blur-sm text-foreground hover:bg-background" disabled={!firstVariant?.availableForSale}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              {firstVariant?.availableForSale ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {node.title}
          </h3>
          <p className="text-lg font-semibold text-primary">
            {formatPrice(price, currency)}
          </p>
        </div>
      </Link>
    </motion.div>;
};