
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Star, Info, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export const PlayStoreDownload = () => {
  return (
    <section id="download" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold mb-4">Download <span className="text-primary">Center</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the version that fits your device. We support both modern and legacy Android phones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* V8 Version - Modern */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[2.5rem] p-8 border border-primary/20 shadow-xl relative overflow-hidden flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Modern Version</h3>
                <p className="text-sm text-muted-foreground font-medium">For Android 9.0+</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-8 flex-1">
              Optimized for high-end performance on newer devices (ARM64-v8a). Includes latest security updates and smooth animations.
            </p>

            <Button asChild size="lg" className="w-full h-16 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
              <a href="http://evadevstudio.com/astuexam/ASTU EXAM.apk" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-3" />
                Download v8 APK
              </a>
            </Button>
            <p className="text-center text-[10px] uppercase font-bold text-muted-foreground mt-4 tracking-widest">
              Size: ~99MB • Architecture: v8a
            </p>
          </motion.div>

          {/* V7 Version - Legacy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[2.5rem] p-8 border border-border/50 shadow-xl relative overflow-hidden flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Legacy Version</h3>
                <p className="text-sm text-muted-foreground font-medium">For Android 7.0 - 8.1</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-8 flex-1">
              Stable version for older devices (ARMEABI-v7a). Lightweight and compatible with a wider range of ASTU student hardware.
            </p>

            <Button asChild variant="secondary" size="lg" className="w-full h-16 rounded-2xl text-lg font-bold shadow-lg active:scale-95 transition-transform">
              <a href="http://evadevstudio.com/astuexam/ASTU EXAM.apk" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-3" />
                Download v7 APK
              </a>
            </Button>
            <p className="text-center text-[10px] uppercase font-bold text-muted-foreground mt-4 tracking-widest">
              Size: ~85MB • Architecture: v7a
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 glass rounded-[2rem] border border-border/50"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative w-24 h-24 overflow-hidden rounded-2xl shrink-0 shadow-lg">
              <Image 
                src="/image/logo.png" 
                alt="ASTU EXAM App Icon" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <h4 className="text-xl font-bold">Verified by ASTU Students</h4>
                <div className="flex items-center gap-1 text-primary font-bold">
                  4.9 <Star className="w-4 h-4 fill-primary" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Join 10,000+ students already mastering their exams with intelligence and efficiency.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10 max-w-xs">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-foreground/70 leading-relaxed">
                If you're unsure, try the <b>Modern v8</b> version first. If it fails to install, use the <b>Legacy v7</b> version.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
