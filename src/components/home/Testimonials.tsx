import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The craftsmanship is exquisite! Every piece tells a story. I love knowing that my purchase supports talented artisans.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    location: "London, UK",
    rating: 5,
    text: "Found House of Macnok while searching for unique, ethical accessories. The quality exceeded my expectations!",
  },
  {
    id: 3,
    name: "Anika Rao",
    location: "Bangalore",
    rating: 5,
    text: "The earrings I bought are conversation starters. Beautiful work and great customer service.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-wider text-accent uppercase mb-4 block">
            Customer Love
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground">
            What Our Community Says
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 relative card-hover"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-golden text-golden" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};