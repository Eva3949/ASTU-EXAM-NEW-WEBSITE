
"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Github, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                A
              </div>
              <span className="font-headline font-bold text-2xl tracking-tight text-white uppercase">
                ASTU <span className="text-primary">EXAM</span>
              </span>
            </Link>
            <p className="leading-relaxed">
              The ultimate educational companion for ASTU students. Built with passion to help you succeed in your academic journey.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Github].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#preview" className="hover:text-primary transition-colors">App Preview</Link></li>
              <li><Link href="#reviews" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Community Forum</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="mb-6">Stay updated with the latest campus news and app features.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-xl px-4 py-2 w-full focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-white p-2 rounded-xl hover:scale-105 transition-transform">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 text-center text-sm">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} ASTU EXAM. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Eva Development Studio.
          </p>
        </div>
      </div>
    </footer>
  );
};
