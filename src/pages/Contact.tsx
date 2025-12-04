import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "hello@houseofmacnok.com",
    description: "We typically respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 98765 43210",
    description: "Mon-Sat, 10 AM - 6 PM IST",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "Itanagar, Arunachal Pradesh",
    description: "India - 791111",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Saturday",
    description: "10:00 AM - 6:00 PM IST",
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm font-medium tracking-wider text-primary uppercase mb-4 block">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our products, artisans, or partnerships? We'd love to
              hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl font-semibold mb-6">
                Send us a message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Your first name" className="h-12" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Your last name" className="h-12" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" className="h-12" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" className="h-12" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="p-6 bg-card rounded-xl hover-lift"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium mb-1">{info.title}</h3>
                    <p className="text-foreground font-medium">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                ))}
              </div>

              {/* FAQ Link */}
              <div className="mt-8 p-6 bg-muted rounded-xl">
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Find quick answers to common questions about shipping, returns, and more.
                </p>
                <Button variant="outline" size="sm">
                  Visit FAQ
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
