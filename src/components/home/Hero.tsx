import { Link } from "react-router-dom";
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import categoryEarrings from "@/assets/category-earrings.jpg";
import categoryBags from "@/assets/category-bags.jpg";
import categoryHair from "@/assets/category-hair.jpg";

const CATEGORY_IMAGES = [
  categoryEarrings,
  categoryBags,
  categoryHair,
  categoryEarrings,
  categoryBags,
  categoryHair,
  categoryEarrings,
  categoryBags,
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
