
"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

export const ScreenshotsGallery = () => {
  const screenshots = PlaceHolderImages.filter(img => img.id.startsWith("screenshot-")).slice(0, 6);

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4">App Gallery</h2>
          <p className="text-muted-foreground text-lg">A visual tour through AstuSphere's feature-rich ecosystem.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {screenshots.map((shot, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-3xl overflow-hidden group border border-border/50 cursor-pointer shadow-lg hover:shadow-2xl transition-all"
            >
              <Image
                src={shot.imageUrl}
                alt={shot.description}
                width={500}
                height={1000}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                data-ai-hint={shot.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg">{shot.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
