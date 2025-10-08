"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/help", label: "Let Us Help You" },
    {
      href: "https://jamichek-weight-loss-tampa-website.vercel.app/",
      label: "Weight Loss Services",
    },
    { href: "/team", label: "Meet The Team" },
    { href: "/the-wellness-journal", label: "The Wellness Journal" },
  ];

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-black text-white text-center text-sm py-3">
        $47 New Patient Special
      </div>

      {/* Header */}
      <header
        className={`  transition-all duration-700 ${
          isSticky
            ? "fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 animate-slideDown"
            : "relative bg-transparent"
        }`}
      >
        <div className="max-w-[1640px] mx-auto px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/images/hero/logo.png"
                alt="Jachimek Chiropractic & Wellness"
                width={195}
                height={70}
                className="w-auto h-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center text-lg text-gray-800 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-primary font-medium underline"
                    : "hover:text-primary "
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Call Button (visible only on smaller desktops) */}
            <Link
              href="tel:8139602225"
              className="flex lg:hidden bg-black text-white px-5 py-2 rounded-full items-center gap-2 hover:bg-primary transition-colors"
            >
              <Phone size={16} />
              <span>813.960.2225</span>
            </Link>
          </nav>

          {/* Call Button (visible on large screens) */}
          <Link
            href="tel:8139602225"
            className="hidden lg:flex bg-black text-white px-5 py-2 rounded-full items-center gap-2 hover:bg-primary transition-colors"
          >
            <Phone size={16} />
            <span>813.960.2225</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Spacer (prevents layout shift when sticky) */}
      {isSticky && <div className="h-[90px]" />}

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-8 py-4 flex flex-col space-y-4 text-gray-800 font-medium border-t shadow-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`transition-colors ${
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="tel:8139602225"
            className="bg-black text-white px-5 py-2 rounded-full text-center hover:bg-primary transition-colors"
          >
            Call: 813.960.2225
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
