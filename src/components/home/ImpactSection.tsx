import { Leaf, Heart, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const impacts = [
  {
    icon: Users,
    title: "Women Empowerment",
    description: "Supporting 50+ women artisans with fair wages and skill development programs.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Using natural materials and eco-friendly processes in every creation.",
  },
  {
    icon: Heart,
    title: "Cultural Preservation",
    description: "Keeping alive ancestral crafts and traditional weaving techniques.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Bringing Arunachali artistry to homes worldwide while staying rooted.",
  },
];

export const ImpactSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-wider text-primary uppercase mb-4 block">
            Our Impact
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            More Than Just Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every purchase supports sustainable livelihoods and preserves the cultural
            heritage of Arunachal Pradesh's indigenous communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 text-center hover-lift"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                <impact.icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                {impact.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
