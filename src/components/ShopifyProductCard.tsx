import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
interface ShopifyProductCardProps {
  product: ShopifyProduct;
  index?: number;
  showBorderAnimation?: boolean;
}
export const ShopifyProductCard = ({
  product,
  index = 0,
  showBorderAnimation = false
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
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 2
    }).format(amount);
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    delay: index * 0.08,
    duration: 0.5,
    ease: "easeOut"
  }} className="group">
      <Link to={`/product/${node.handle}`} className="block">
        <div className={`relative overflow-hidden rounded-xl bg-muted aspect-square mb-5 shadow-soft transition-all duration-500 group-hover:shadow-card ${showBorderAnimation ? "ring-2 ring-primary ring-offset-2 ring-offset-background group-hover:ring-transparent" : ""}`}>
          {image ? <img src={image.url} alt={image.altText || node.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" /> : <div className="w-full h-full flex items-center justify-center bg-muted">
              <span className="text-muted-foreground text-sm">No image</span>
            </div>}
        </div>

        <div className="space-y-2 text-center">
          <h3 className="font-serif italic text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 text-base leading-snug underline underline-offset-2 decoration-1">
            {node.title}
          </h3>
          <p className="text-base font-normal text-foreground">
            {formatPrice(price, currency)}
          </p>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="mt-4 px-2">
        <Button onClick={handleAddToCart} variant="outline" disabled={!firstVariant?.availableForSale} className="w-full rounded-full border-primary text-foreground hover:bg-primary/5 hover:text-foreground font-normal text-sm py-5 border-2">
          {firstVariant?.availableForSale ? "Add to cart" : "Out of Stock"}
        </Button>
      </div>
    </motion.div>;
};