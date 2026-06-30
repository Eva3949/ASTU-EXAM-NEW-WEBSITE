
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
    <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <Star className="w-4 h-4 fill-primary" />
              <span>The #1 Study App for ASTU Students</span>
            </div>
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
              Master Every <span className="text-primary">ASTU Exam</span> with Confidence
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Prepare smarter with past exams, AI assistance, GPA calculator, code runner, and everything you need in one powerful app.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                <Download className="w-5 h-5 mr-2" />
                Download APK
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full hover:bg-muted transition-all">
                <ImageIcon className="w-5 h-5 mr-2" />
                View Screenshots
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto lg:mx-0">
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-headline">4.9★</span>
                <span className="text-sm text-muted-foreground">Rating</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-headline">10K+</span>
                <span className="text-sm text-muted-foreground">Downloads</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-headline">20K+</span>
                <span className="text-sm text-muted-foreground">Questions</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-headline">ASTU</span>
                <span className="text-sm text-muted-foreground">Focused</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Phone Mockup */}
        <div className="flex-1 relative w-full max-w-[400px] lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 animate-float"
          >
            <div className="relative mx-auto w-[280px] h-[580px] lg:w-[320px] lg:h-[650px] bg-foreground rounded-[40px] border-[8px] border-foreground shadow-2xl overflow-hidden ring-4 ring-primary/20">
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
              className="absolute -right-8 top-1/4 glass p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-primary">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">GPA Tracker</p>
                <p className="text-sm font-bold">Updated Live</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -left-12 bottom-1/4 glass p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Star className="w-6 h-6 fill-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">AI Help</p>
                <p className="text-sm font-bold">Solved in Seconds</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Background Glows for Phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
};
