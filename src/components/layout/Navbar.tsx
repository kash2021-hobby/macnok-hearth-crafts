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
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        House of Macnok — Embracing the Roof of Arunachal
      </div>

      <header className="sticky top-0 z-50 w-full bg-primary">
        <nav className="container-main">
          <div className="flex h-[70px] lg:h-20 items-center justify-between">
            {/* Left Icons */}
            <div className="flex items-center gap-2">
              <button
                className="p-2 -ml-2 text-primary-foreground"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Logo - Center */}
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
              <span className="font-serif text-xl lg:text-2xl font-semibold tracking-tight text-primary-foreground">
                House of Macnok
              </span>
            </Link>

            {/* Right Icons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <User className="h-5 w-5" />
              </Button>
              <ShopifyCartDrawer />
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="py-4 space-y-1 border-t border-primary-foreground/20">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block py-3 text-base font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
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
    </>
  );
};