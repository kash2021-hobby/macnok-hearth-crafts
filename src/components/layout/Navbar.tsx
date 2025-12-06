import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopifyCartDrawer } from "./ShopifyCartDrawer";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Artisans", href: "/artisans" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-[hsl(var(--nav-footer))] backdrop-blur-md">
      <nav className="container-main">
        <div className="flex h-18 items-center justify-between lg:h-22" style={{ height: '72px' }}>
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2 text-white/90 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-serif text-xl lg:text-2xl font-medium tracking-wide text-white transition-opacity group-hover:opacity-90">
              House of Macnok
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-normal tracking-wide text-white/80 hover:text-white transition-all duration-300 link-underline"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Search className="h-[18px] w-[18px]" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <User className="h-[18px] w-[18px]" />
            </Button>
            <ShopifyCartDrawer />
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-1 border-t border-white/10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block py-3 text-base font-normal tracking-wide text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};