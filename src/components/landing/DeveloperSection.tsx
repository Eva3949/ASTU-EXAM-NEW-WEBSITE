
"use client";

import React from "react";
import Image from "next/image";
import { Github, Globe, Linkedin, MessageSquare, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

export const DeveloperSection = () => {
  const avatar = PlaceHolderImages.find((img) => img.id === "developer-avatar");

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[48px] p-8 lg:p-16 border border-border shadow-2xl relative"
        >
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 shrink-0">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] animate-pulse" />
              <div className="relative w-full h-full rounded-[60px] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                {avatar && (
                  <Image
                    src={avatar.imageUrl}
                    alt="Eva Development Studio"
                    fill
                    className="object-cover"
                    data-ai-hint={avatar.imageHint}
                  />
                )}
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                Founder & Lead Developer
              </div>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold mb-6">Eva Development Studio</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                "Our mission is to empower every ASTU student with technology. We believe that access to education materials should be fast, intuitive, and intelligently organized."
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                <Button variant="outline" size="lg" className="rounded-2xl gap-2">
                  <Github className="w-5 h-5" /> GitHub
                </Button>
                <Button variant="outline" size="lg" className="rounded-2xl gap-2">
                  <Globe className="w-5 h-5" /> Portfolio
                </Button>
                <Button variant="outline" size="lg" className="rounded-2xl gap-2">
                  <Twitter className="w-5 h-5" /> Twitter
                </Button>
                <Button variant="outline" size="lg" className="rounded-2xl gap-2">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Joined by <span className="text-foreground font-bold">15+ Collaborators</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
