
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Share2, Send, Star, Info } from "lucide-react";
import { motion } from "framer-motion";

export const PlayStoreDownload = () => {
  return (
    <section className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[2.5rem] p-6 sm:p-10 lg:p-16 border border-border/50 shadow-2xl relative overflow-hidden"
        >
          {/* Play Store Vibes Icon */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-10 text-center md:text-left">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20 shrink-0">
              <Image 
                src="/image/logo.png" 
                alt="ASTU EXAM App Icon" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-1">ASTU EXAM</h2>
              <p className="text-primary font-bold text-base sm:text-lg mb-2">Eva Development Studio</p>
              <p className="text-muted-foreground text-sm mb-4">Education • Contains Ads</p>
              
              <div className="flex items-center gap-4 sm:gap-6 justify-center md:justify-start overflow-x-auto pb-2 scrollbar-hide">
                <div className="text-center shrink-0">
                  <div className="flex items-center gap-1 font-bold justify-center">4.9 <Star className="w-3 h-3 fill-foreground" /></div>
                  <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">12K Reviews</p>
                </div>
                <div className="w-px h-6 bg-border shrink-0" />
                <div className="text-center shrink-0">
                  <div className="font-bold">99MB</div>
                  <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Size</p>
                </div>
                <div className="w-px h-6 bg-border shrink-0" />
                <div className="text-center shrink-0">
                  <div className="font-bold">10K+</div>
                  <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Downloads</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button asChild size="lg" className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/30 active:scale-95 transition-transform">
              <a href="/APK/ASTU EXAM.apk" download="ASTU EXAM.apk">
                <Download className="w-5 h-5 mr-3" />
                Download APK
              </a>
            </Button>
            <div className="flex gap-4 w-full sm:w-auto">
              <Button variant="outline" size="icon" className="flex-1 sm:flex-none w-full sm:w-14 h-14 rounded-2xl active:scale-90 transition-transform">
                <Share2 className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="flex-1 sm:flex-none w-full sm:w-14 h-14 rounded-2xl text-blue-500 hover:text-blue-600 active:scale-90 transition-transform">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-border/50">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Version</span>
              <span className="font-bold text-sm sm:text-base">2.0.0</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Android</span>
              <span className="font-bold text-sm sm:text-base">7.0 +</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Updated</span>
              <span className="font-bold text-sm sm:text-base">Jun 30, 2026</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Category</span>
              <span className="font-bold text-sm sm:text-base">Education</span>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-4 p-5 sm:p-6 bg-primary/5 rounded-[1.5rem] border border-primary/10">
            <div className="w-5 h-5 text-primary shrink-0 mt-0.5">
              <Info className="w-full h-full" />
            </div>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
              Join 10,000+ ASTU students already mastering their exams. Access past papers, intelligent study guides, and the AI-powered assistant instantly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
