
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Share2, Send, Star, Users, Info } from "lucide-react";
import { motion } from "framer-motion";

export const PlayStoreDownload = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[40px] p-8 lg:p-16 border border-border shadow-2xl relative overflow-hidden"
        >
          {/* Play Store Vibes Icon */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-32 h-32 lg:w-40 lg:h-40 bg-primary rounded-[32px] flex items-center justify-center text-white font-extrabold text-6xl shadow-2xl shadow-primary/20 shrink-0">
              A
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-headline font-bold mb-2">AstuSphere</h2>
              <p className="text-primary font-bold text-lg mb-2">Eva Development Studio</p>
              <p className="text-muted-foreground mb-4">Education • Contains Ads</p>
              <div className="flex items-center gap-6 justify-center md:justify-start">
                <div className="text-center">
                  <div className="flex items-center gap-1 font-bold">4.9 <Star className="w-3 h-3 fill-foreground" /></div>
                  <p className="text-[10px] uppercase text-muted-foreground font-bold">12K Reviews</p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <div className="font-bold">50MB</div>
                  <p className="text-[10px] uppercase text-muted-foreground font-bold">Size</p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <div className="font-bold">10K+</div>
                  <p className="text-[10px] uppercase text-muted-foreground font-bold">Downloads</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="flex-1 min-w-[200px] h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/30">
              <Download className="w-5 h-5 mr-2" />
              Download APK
            </Button>
            <div className="flex gap-4 w-full md:w-auto">
              <Button variant="outline" size="icon" className="w-14 h-14 rounded-xl">
                <Share2 className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-14 h-14 rounded-xl text-blue-500 hover:text-blue-600">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-border/50">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Version</span>
              <span className="font-bold">2.4.0</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Android</span>
              <span className="font-bold">7.0 +</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Updated</span>
              <span className="font-bold">May 12, 2024</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Category</span>
              <span className="font-bold">Education</span>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-4 p-6 bg-primary/5 rounded-3xl border border-primary/10">
            <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p className="text-sm text-foreground/70 leading-relaxed">
              Join 10,000+ students already mastering their exams. Access past papers, study guides, and the AI-powered assistant instantly after installation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
