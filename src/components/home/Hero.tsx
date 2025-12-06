import { Link } from "react-router-dom";
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import categoryAccessories from "@/assets/category-accessories.webp";
import categoryLuxe from "@/assets/category-luxe.webp";
import categoryWellness from "@/assets/category-wellness.webp";
import categoryDecor from "@/assets/category-decor.webp";

const CATEGORY_IMAGES = [
  categoryAccessories,
  categoryLuxe,
  categoryWellness,
  categoryDecor,
  categoryAccessories,
  categoryLuxe,
  categoryWellness,
  categoryDecor,
];

export const Hero = () => {
  return (
    <AnimatedMarqueeHero
      tagline="Handcrafted with love from Arunachal Pradesh"
      title={
        <>
          Embracing the Roof of
          <br />
          <span className="text-primary">Arunachal</span>
        </>
      }
      description="Discover authentic handcrafted treasures made by skilled women artisans, preserving centuries-old traditions of Northeast India."
      ctaText="Shop Collection"
      ctaHref="/shop"
      images={CATEGORY_IMAGES}
    />
  );
};
