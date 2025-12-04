import { Product, Category } from "@/types/product";
import categoryEarrings from "@/assets/category-earrings.jpg";
import categoryBags from "@/assets/category-bags.jpg";
import categoryHair from "@/assets/category-hair.jpg";

export const categories: Category[] = [
  {
    id: "1",
    name: "Accessories",
    slug: "accessories",
    image: categoryEarrings,
    description: "Handcrafted jewelry, bags, and adornments by tribal artisans",
  },
  {
    id: "2",
    name: "Decor",
    slug: "decor",
    image: categoryBags,
    description: "Artisan home decor celebrating ancestral craftsmanship",
  },
  {
    id: "3",
    name: "Wellness",
    slug: "wellness",
    image: categoryHair,
    description: "Natural wellness products rooted in traditional wisdom",
  },
  {
    id: "4",
    name: "Luxe Collection",
    slug: "luxe-collection",
    image: categoryEarrings,
    description: "Premium handcrafted pieces for the discerning collector",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Apatani Weave Earrings",
    price: 1200,
    originalPrice: 1500,
    image: categoryEarrings,
    category: "earrings",
    rating: 4.8,
    reviews: 24,
    isNew: true,
    description: "Handwoven earrings featuring traditional Apatani patterns with natural dyed threads and brass accents.",
    artisan: "Yami Tago",
    materials: ["Cotton thread", "Brass", "Natural dyes"],
    inStock: true,
  },
  {
    id: "2",
    name: "Adi Tribal Tote Bag",
    price: 3500,
    image: categoryBags,
    category: "bags",
    rating: 4.9,
    reviews: 18,
    isBestSeller: true,
    description: "Spacious tote bag handwoven with traditional Adi tribal motifs, perfect for everyday use.",
    artisan: "Mimi Padu",
    materials: ["Handwoven cotton", "Vegetable tanned leather handles"],
    inStock: true,
  },
  {
    id: "3",
    name: "Monpa Silk Scrunchie Set",
    price: 450,
    image: categoryHair,
    category: "hair-accessories",
    rating: 4.7,
    reviews: 32,
    isNew: true,
    description: "Set of 3 scrunchies made from hand-spun Monpa silk in earthy tones.",
    artisan: "Tsering Dolma",
    materials: ["Monpa silk", "Elastic"],
    inStock: true,
  },
  {
    id: "4",
    name: "Nyishi Beaded Hoops",
    price: 1800,
    originalPrice: 2200,
    image: categoryEarrings,
    category: "earrings",
    rating: 4.6,
    reviews: 15,
    isBestSeller: true,
    description: "Statement hoop earrings adorned with traditional Nyishi beadwork patterns.",
    artisan: "Nabam Yaring",
    materials: ["Brass hoops", "Glass beads", "Cotton thread"],
    inStock: true,
  },
  {
    id: "5",
    name: "Woven Crossbody Sling",
    price: 2800,
    image: categoryBags,
    category: "bags",
    rating: 4.8,
    reviews: 22,
    description: "Compact crossbody bag with adjustable strap, featuring geometric tribal patterns.",
    artisan: "Mimi Padu",
    materials: ["Handwoven cotton", "Brass buckle", "Cotton strap"],
    inStock: true,
  },
  {
    id: "6",
    name: "Heritage Hair Clips",
    price: 650,
    image: categoryHair,
    category: "hair-accessories",
    rating: 4.5,
    reviews: 28,
    isNew: true,
    description: "Set of 2 handcrafted hair clips with miniature woven details.",
    artisan: "Yami Tago",
    materials: ["Metal clips", "Woven cotton", "Natural dyes"],
    inStock: true,
  },
  {
    id: "7",
    name: "Tribal Tassel Earrings",
    price: 980,
    image: categoryEarrings,
    category: "earrings",
    rating: 4.9,
    reviews: 41,
    isBestSeller: true,
    description: "Elegant drop earrings with hand-tied tassels in traditional colors.",
    artisan: "Nabam Yaring",
    materials: ["Silk thread", "Brass findings", "Glass beads"],
    inStock: true,
  },
  {
    id: "8",
    name: "Artisan Market Tote",
    price: 4200,
    image: categoryBags,
    category: "bags",
    rating: 4.7,
    reviews: 12,
    description: "Large market tote with reinforced base, handwoven with vibrant tribal patterns.",
    artisan: "Collective of 5 artisans",
    materials: ["Handwoven cotton", "Jute lining", "Leather accents"],
    inStock: true,
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((product) => product.isNew);
};

export const getBestSellers = (): Product[] => {
  return products.filter((product) => product.isBestSeller);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
