
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Star, Info, Cpu, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export const PlayStoreDownload = () => {
  return (
    <section id="download" className="py-24 px-6 bg-[#f8f9fa] dark:bg-slate-900/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold mb-4">Official <span className="text-primary">Download Hub</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select the optimized package for your device architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* V8 Version - Modern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-border/40 relative overflow-hidden flex flex-col"
          >
            <div className="flex gap-5 mb-6">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                <Image src="/image/logo.png" alt="ASTU EXAM v8" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold leading-tight">ASTU EXAM (Modern-for New Version Phones)</h3>
                <p className="text-primary font-medium text-sm">Eva Development Studio</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs font-bold">4.9</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg w-fit">
              <BadgeCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Verified by Student Union</span>
            </div>
            
            <div className="space-y-3 mb-8 flex-1">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Cpu className="w-4 h-4" />
                <span>Architecture: <b>ARM64-v8a</b></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Smartphone className="w-4 h-4" />
                <span>Compatibility: <b>Android 9.0+</b></span>
              </div>
            </div>

            <Button asChild size="lg" className="w-full h-12 rounded-lg text-sm font-bold bg-[#01875f] hover:bg-[#01875f]/90 text-white shadow-none active:scale-95 transition-transform">
              <a href="http://evadevstudio.com/astuexam/v8/ASTU EXAM.apk" target="_blank" rel="noopener noreferrer">
                Install v8 (Modern)
              </a>
            </Button>
            <p className="text-center text-[10px] text-muted-foreground mt-4 font-medium uppercase tracking-widest">
              Size:50 MB
            </p>
          </motion.div>

          {/* V7 Version - Legacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-border/40 relative overflow-hidden flex flex-col"
          >
            <div className="flex gap-5 mb-6">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-md flex-shrink-0 grayscale-[0.3]">
                <Image src="/image/logo.png" alt="ASTU EXAM v7" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold leading-tight">ASTU EXAM (Legacy-for Old Version Phones)</h3>
                <p className="text-primary font-medium text-sm">Eva Development Studio</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs font-bold">4.8</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg w-fit">
              <Smartphone className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">High Compatibility</span>
            </div>

            <div className="space-y-3 mb-8 flex-1">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Cpu className="w-4 h-4" />
                <span>Architecture: <b>ARMEABI-v7a</b></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Smartphone className="w-4 h-4" />
                <span>Compatibility: <b>Android 4.0+</b></span>
              </div>
            </div>

            <Button asChild variant="outline" size="lg" className="w-full h-12 rounded-lg text-sm font-bold border-[#01875f] text-[#01875f] hover:bg-green-50 active:scale-95 transition-transform">
              <a href="http://evadevstudio.com/astuexam/v7/ASTU EXAM.apk" target="_blank" rel="noopener noreferrer">
                Install v7 (Legacy)
              </a>
            </Button>
            <p className="text-center text-[10px] text-muted-foreground mt-4 font-medium uppercase tracking-widest">
              Size: 50 MB
            </p>
          </motion.div>
        </div>

        {/* Security Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 py-6 border-t border-border/50"
        >
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">Verified by Play Protect (Equivalent)</span>
          </div>
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-500" />
            <p className="text-sm text-muted-foreground">
              Unsure? Most modern phones use <b>v8 (Modern)</b>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
