import React from "react";
import Button from "../components/Button";

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
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
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
        <div className="flex items-center gap-1">
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
        <Button size="sm">Contact Me</Button>
      </nav>
    </header>
  );
};

export default Navbar;
