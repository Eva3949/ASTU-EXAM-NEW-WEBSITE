
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Preview", href: "#preview" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4 ${
          isScrolled || mobileMenuOpen ? "glass shadow-md py-3" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <Image 
                src="/image/logo.png" 
                alt="ASTU EXAM Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <span className="font-headline font-bold text-xl sm:text-2xl tracking-tight uppercase">
              ASTU <span className="text-primary">EXAM</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/70 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="rounded-full px-6 shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              <a href="/APK/ASTU EXAM.apk" download="ASTU EXAM.apk">
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground relative z-[110]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm glass z-[101] shadow-2xl p-8 pt-24 md:hidden"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xl font-headline font-bold py-3 border-b border-border/50 flex items-center justify-between group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="text-primary"
                    >
                      →
                    </motion.span>
                  </Link>
                ))}
                <div className="mt-8 space-y-4">
                  <Button asChild className="w-full rounded-2xl py-7 text-lg shadow-xl shadow-primary/30">
                    <a href="/APK/ASTU EXAM.apk" download="ASTU EXAM.apk">
                      <Download className="w-5 h-5 mr-3" />
                      Download App
                    </a>
                  </Button>
                  <p className="text-center text-sm text-muted-foreground font-medium">
                    Available for Android 7.0+
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
