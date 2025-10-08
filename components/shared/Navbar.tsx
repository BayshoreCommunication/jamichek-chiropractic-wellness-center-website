// "use client";

// import { ChevronDown, Menu, Phone, X } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   return (
//     <div className="">
//       {/* Top Bar */}
//       <div className="bg-black text-white text-center text-sm py-4">
//         $47 New Patient Special
//       </div>
//       <header className="max-w-[1640px] mx-auto px-8 py-4 flex justify-between items-center">
//         {/* Logo */}

//         <div className="flex items-center space-x-2">
//           <Image
//             src="/images/hero/logo.png"
//             alt="Logo"
//             width={195}
//             height={70}
//             className="w-auto h-auto"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-8 items-center text-black">
//           <a href="#" className="text-primary font-medium">
//             Home
//           </a>

//           {/* Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <button className="flex items-center space-x-1 hover:text-primary">
//               <span>Let us help you</span>
//               <ChevronDown size={16} />
//             </button>
//             {dropdownOpen && (
//               <div className="">
//                 {/* absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-4 w-48 text-gray-800 */}
//               </div>
//             )}
//           </div>
//           {/* Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <button className="flex items-center space-x-1 hover:text-primary">
//               <span>Weight Loss Services</span>
//               <ChevronDown size={16} />
//             </button>
//             {dropdownOpen && <div className=""></div>}
//           </div>

//           <a href="#" className="hover:text-primary">
//             Meet The Team
//           </a>
//           <a href="#" className="hover:text-primary">
//             The Wellness Journal
//           </a>

//           <a
//             href="tel:8139602225"
//             className="bg-primary text-white px-4 py-2 rounded-md flex items-center space-x-2"
//           >
//             <Phone size={16} /> <span>813 960 2225</span>
//           </a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-800"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </header>

//       {/* Mobile Nav */}
//       {mobileOpen && (
//         <div className="md:hidden bg-white px-8 py-4 flex flex-col space-y-4 text-gray-800">
//           <a href="#" className="block text-primary font-medium">
//             Home
//           </a>

//           <details>
//             <summary className="cursor-pointer">Let us help you</summary>
//             <div className="ml-4 flex flex-col space-y-2">
//               {/* <a href="#" className="hover:text-primary">Pain Relief</a>
//               <a href="#" className="hover:text-primary">Injury Recovery</a>
//               <a href="#" className="hover:text-primary">Wellness</a> */}
//             </div>
//           </details>

//           <details>
//             <summary className="cursor-pointer">Weight Loss Services</summary>
//             <div className="ml-4 flex flex-col space-y-2">
//               {/* <a href="#" className="hover:text-primary">Program 1</a>
//               <a href="#" className="hover:text-primary">Program 2</a> */}
//             </div>
//           </details>

//           <a href="#" className="hover:text-primary">
//             Meet The Team
//           </a>
//           <a href="#" className="hover:text-primary">
//             The Wellness Journal
//           </a>

//           <a
//             href="tel:8139602225"
//             className="bg-primary text-white px-4 py-2 rounded-md text-center"
//           >
//             Call: 813 960 2225
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

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

  return (
    <div className="">
      {/* Top Bar */}
      <div className="bg-black text-white text-center text-sm py-3">
        $47 New Patient Special
      </div>

      {/* Header */}
      <header
        className={`  transition-all duration-1000 ${
          isSticky
            ? "fixed top-0 left-0 right-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50 animate-slideDown"
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
            <Link href="/" className="text-primary font-medium">
              Home
            </Link>
            <Link href="/help" className="hover:text-primary">
              Let Us Help You
            </Link>
            <Link href="/weight-loss" className="hover:text-primary">
              Weight Loss Services
            </Link>
            <Link href="/team" className="hover:text-primary">
              Meet The Team
            </Link>
            <Link href="/wellness-journal" className="hover:text-primary">
              The Wellness Journal
            </Link>

            <Link
              href="tel:8139602225"
              className="flex lg:hidden bg-black text-white px-5 py-2 rounded-full items-center gap-2 hover:bg-primary transition-colors"
            >
              <Phone size={16} />
              <span>813.960.2225</span>
            </Link>
          </nav>

          {/* Call Button (Desktop Only) */}
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
          <Link href="/" className="text-primary font-medium">
            Home
          </Link>
          <Link href="/help" className="hover:text-primary">
            Let Us Help You
          </Link>
          <Link href="/weight-loss" className="hover:text-primary">
            Weight Loss Services
          </Link>
          <Link href="/team" className="hover:text-primary">
            Meet The Team
          </Link>
          <Link href="/wellness-journal" className="hover:text-primary">
            The Wellness Journal
          </Link>
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
