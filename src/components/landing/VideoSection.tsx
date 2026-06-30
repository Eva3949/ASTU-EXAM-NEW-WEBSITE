
"use client";

import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export const VideoSection = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4">See It in Action</h2>
          <p className="text-muted-foreground text-lg">A quick walkthrough of how AstuSphere can help you dominate your finals.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white dark:border-slate-800 group"
        >
          {/* Placeholder for Video - using an image as background */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://picsum.photos/seed/video-bg/1200/675')` }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 transition-transform active:scale-95 group">
            <Play className="w-10 h-10 fill-white ml-2" />
          </button>

          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none">
            <div className="glass px-6 py-3 rounded-2xl text-white font-bold text-sm backdrop-blur-md">
              APP TOUR 2024
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
