
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Image as ImageIcon, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const Hero = () => {
  const heroMockup = PlaceHolderImages.find((img) => img.id === "hero-mockup");

  return (
    <section className="relative pt-24 pb-16 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-6">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-primary" />
              <span>The #1 Study App for ASTU Students</span>
            </div>
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.2] lg:leading-[1.1] mb-6">
              Master Every <span className="text-primary">ASTU Exam</span> with Confidence
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Prepare smarter with past exams, AI assistance, GPA calculator, and everything you need in one powerful app.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                <a href="/APK/ASTU EXAM.apk" download="ASTU EXAM.apk">
                  <Download className="w-5 h-5 mr-2" />
                  Download APK
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full hover:bg-muted active:scale-95 transition-all" onClick={() => document.getElementById('preview')?.scrollIntoView({ behavior: 'smooth' })}>
                <ImageIcon className="w-5 h-5 mr-2" />
                View Screenshots
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-2xl mx-auto lg:mx-0">
              <div className="flex flex-col p-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20">
                <span className="text-xl sm:text-2xl font-bold font-headline">4.9★</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Rating</span>
              </div>
              <div className="flex flex-col p-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20">
                <span className="text-xl sm:text-2xl font-bold font-headline">10K+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Downloads</span>
              </div>
              <div className="flex flex-col p-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20">
                <span className="text-xl sm:text-2xl font-bold font-headline">20K+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Questions</span>
              </div>
              <div className="flex flex-col p-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20">
                <span className="text-xl sm:text-2xl font-bold font-headline">ASTU</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Focused</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Phone Mockup */}
        <div className="flex-1 relative w-full flex justify-center lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 animate-float w-full max-w-[280px] sm:max-w-[320px]"
          >
            <div className="relative aspect-[9/18.5] bg-foreground rounded-[3rem] border-[8px] border-foreground shadow-2xl overflow-hidden ring-4 ring-primary/20">
              {heroMockup && (
                <Image
                  src={heroMockup.imageUrl}
                  alt={heroMockup.description}
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint={heroMockup.imageHint}
                />
              )}
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 3 }}
              className="hidden sm:flex absolute -right-6 top-1/4 glass p-3 rounded-2xl shadow-xl items-center gap-3 z-20"
            >
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-primary">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">GPA Tracker</p>
                <p className="text-xs font-bold">Updated Live</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 4 }}
              className="hidden sm:flex absolute -left-10 bottom-1/4 glass p-3 rounded-2xl shadow-xl items-center gap-3 z-20"
            >
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Star className="w-5 h-5 fill-blue-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">AI Help</p>
                <p className="text-xs font-bold">Solved in Seconds</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Background Glows for Phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-[80px] lg:blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
};
