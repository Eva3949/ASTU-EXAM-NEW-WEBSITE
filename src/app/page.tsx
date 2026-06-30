
"use client";

import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Statistics } from "@/components/landing/Statistics";
import { AppPreview } from "@/components/landing/AppPreview";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { Comparison } from "@/components/landing/Comparison";
import { AIStudyTool } from "@/components/landing/AIStudyTool";
import { Testimonials } from "@/components/landing/Testimonials";
import { ScreenshotsGallery } from "@/components/landing/ScreenshotsGallery";
import { VideoSection } from "@/components/landing/VideoSection";
import { FAQ } from "@/components/landing/FAQ";
import { PlayStoreDownload } from "@/components/landing/PlayStoreDownload";
import { DeveloperSection } from "@/components/landing/DeveloperSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 bg-background" />
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] bg-accent/10 rounded-full blur-[80px]" />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Statistics />
        <AppPreview />
        <FeaturesGrid />
        <AIStudyTool />
        <Comparison />
        <Testimonials />
        <ScreenshotsGallery />
        <VideoSection />
        <FAQ />
        <PlayStoreDownload />
        <DeveloperSection />
        <ContactSection />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
