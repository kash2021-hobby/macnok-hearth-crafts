import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  shop: [
    { name: "All Products", href: { pathname: "/shop" } },
    { name: "Accessories", href: { pathname: "/shop", search: "?category=accessories" } },
    { name: "Decor", href: { pathname: "/shop", search: "?category=decor" } },
    { name: "Wellness", href: { pathname: "/shop", search: "?category=wellness" } },
    { name: "Luxe Collection", href: { pathname: "/shop", search: "?category=luxe-collection" } },
  ],
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Meet the Artisans", href: "/artisans" },
    { name: "Sustainability", href: "/about#sustainability" },
    { name: "Press", href: "/press" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping & Returns", href: "/shipping" },
    { name: "FAQ", href: "/faq" },
    { name: "Size Guide", href: "/size-guide" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="container-main py-16 lg:py-20">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h3 className="font-serif text-2xl lg:text-3xl mb-4">
            Join Our Community
          </h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive updates on new collections, artisan stories, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12"
            />
            <Button variant="default" size="lg">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-xl font-semibold">
                House of Macnok
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Embracing the Roof of Arunachal
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@houseofmacnok.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-main py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 House of Macnok. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
