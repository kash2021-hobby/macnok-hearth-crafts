import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import artisanStory from "@/assets/artisan-story.jpg";
import categoryBags from "@/assets/category-bags.jpg";
import categoryEarrings from "@/assets/category-earrings.jpg";

const artisans = [
  {
    id: 1,
    name: "Yami Tago",
    village: "Ziro, Apatani Tribe",
    specialty: "Traditional Weaving & Earrings",
    story:
      "Yami learned weaving from her grandmother at age 8. Today, she leads a collective of 12 women artisans, preserving Apatani weaving traditions while creating contemporary pieces.",
    image: categoryEarrings,
  },
  {
    id: 2,
    name: "Mimi Padu",
    village: "Pasighat, Adi Tribe",
    specialty: "Handwoven Bags",
    story:
      "A third-generation weaver, Mimi's intricate patterns tell stories of Adi folklore. Her bags have gained recognition internationally while she trains young women in her village.",
    image: categoryBags,
  },
  {
    id: 3,
    name: "Tsering Dolma",
    village: "Tawang, Monpa Tribe",
    specialty: "Silk Accessories",
    story:
      "Tsering revived the art of Monpa silk weaving in her community. She now works with 15 women, creating luxurious hair accessories using hand-spun silk.",
    image: artisanStory,
  },
];

const Artisans = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm font-medium tracking-wider text-primary uppercase mb-4 block">
              The Makers
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-6">
              Meet Our Artisans
            </h1>
            <p className="text-lg text-muted-foreground">
              Behind every piece is a skilled artisan with a unique story. Get to know
              the talented women who bring House of Macnok creations to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artisan Profiles */}
      <section className="py-20 lg:py-28">
        <div className="container-main">
          <div className="space-y-24">
            {artisans.map((artisan, index) => (
              <motion.div
                key={artisan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-2">
                    {artisan.name}
                  </h2>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{artisan.village}</span>
                  </div>
                  <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-6">
                    {artisan.specialty}
                  </span>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {artisan.story}
                  </p>
                  <Button variant="outline" asChild>
                    <Link to={`/shop?artisan=${artisan.id}`}>
                      View Their Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-6">
              Support Artisan Livelihoods
            </h2>
            <p className="text-muted-foreground mb-8">
              Every purchase directly impacts these artisans and their families. Shop
              consciously and help preserve traditional craftsmanship.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Artisans;
