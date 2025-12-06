import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  shop: [
    { name: "All Products", href: { pathname: "/shop" } },
    { name: "Accessories", href: { pathname: "/shop", search: "category=accessories" } },
    { name: "Decor", href: { pathname: "/shop", search: "category=decor" } },
    { name: "Wellness", href: { pathname: "/shop", search: "category=wellness" } },
    { name: "Luxe Collection", href: { pathname: "/shop", search: "category=luxe-collection" } },
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
    <footer className="bg-[hsl(var(--nav-footer))] border-t border-white/10 text-white">
      {/* Newsletter Section */}
      <div className="container-main py-20 lg:py-24">
        <div className="max-w-md mx-auto text-center mb-16">
          <h3 className="font-serif text-2xl lg:text-3xl font-medium mb-4 tracking-wide">
            Join Our Community
          </h3>
          <p className="text-white/70 mb-8 text-base leading-relaxed">
            Subscribe to receive updates on new collections, artisan stories, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
            />
            <Button variant="default" size="lg" className="bg-white text-foreground hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <span className="font-serif text-xl font-medium tracking-wide">
                House of Macnok
              </span>
            </Link>
            <p className="text-sm text-white/70 mb-5 leading-relaxed">
              Embracing the Roof of Arunachal
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@houseofmacnok.com"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-5 text-sm tracking-wide">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-5 text-sm tracking-wide">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-5 text-sm tracking-wide">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
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
      <div className="border-t border-white/10">
        <div className="container-main py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2024 House of Macnok. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};