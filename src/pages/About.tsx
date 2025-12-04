import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import artisanStory from "@/assets/artisan-story.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

const values = [
  {
    icon: Heart,
    title: "Authentic Craftsmanship",
    description:
      "Every piece is handmade using traditional techniques passed down through generations, ensuring authenticity and uniqueness.",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description:
      "We provide fair wages, skill development, and economic independence to women artisans across remote villages.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "Using natural, locally-sourced materials and eco-friendly processes, we minimize our environmental impact.",
  },
  {
    icon: MapPin,
    title: "Cultural Preservation",
    description:
      "We document and preserve traditional patterns, techniques, and stories to keep this heritage alive for future generations.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Artisan crafts"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>

        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm font-medium tracking-wider text-primary uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 leading-tight">
              Weaving Dreams, Preserving Heritage
            </h1>
            <p className="text-lg text-muted-foreground">
              House of Macnok bridges the gap between remote artisan communities and
              conscious consumers worldwide, celebrating the rich cultural tapestry of
              Arunachal Pradesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 lg:py-28">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={artisanStory}
                  alt="Ninna Lego, Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-sm font-medium tracking-wider text-primary uppercase mb-4 block">
                The Beginning
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-6">
                Founded by Ninna Lego
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Growing up in Arunachal Pradesh, Ninna witnessed firsthand the
                  incredible artistry of women in her community—skills that were slowly
                  fading as younger generations moved to cities.
                </p>
                <p>
                  In 2019, she founded House of Macnok with a simple mission: to create
                  a sustainable marketplace that honors traditional craftsmanship while
                  providing economic opportunities for women artisans.
                </p>
                <p>
                  "Macnok" means "mother's hands" in the local dialect—a tribute to the
                  countless mothers and grandmothers whose skilled hands have kept these
                  traditions alive.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container-main">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-primary uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold">
              Our Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 hover-lift"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-6">
              Join Our Journey
            </h2>
            <p className="text-muted-foreground mb-8">
              Every purchase supports our mission to empower women artisans and preserve
              the cultural heritage of Arunachal Pradesh.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/shop">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
