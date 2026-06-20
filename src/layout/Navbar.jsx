import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, href: "#about", label: "About" },
  {
    id: 2,
    href: "#projects",
    label: "Projects",
  },
  {
    id: 3,
    href: "#experience",
    label: "Experience",
  },
  {
    id: 4,
    href: "#testimonials",
    label: "Testimonials",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${isScroll ? "glass-strong py-3" : "bg-transparent py-5"} z-50 transition-all duration-500`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div>
          <a
            href="#"
            className="text-xl  font-bold tracking-tight hover:text-primary"
          >
            Misskhat.<span className="text-primary">HM</span>
          </a>
        </div>

        {/* Desktop navbar */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex items-center glass rounded-full px-2 py-1 gap-1">
            {navLinks.map((link, id) => (
              <a
                key={id}
                href={link.href}
                className="px-4 py-2 text-sm text-mute-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, id) => (
              <a
                key={id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-lg text-mute-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
