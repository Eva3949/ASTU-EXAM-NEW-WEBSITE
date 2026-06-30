
"use client";

import React from "react";
import { Check, X, Smartphone, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Comparison = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4">Why Choose AstuSphere?</h2>
          <p className="text-muted-foreground text-lg">See how we transform your academic journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Without App */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-[32px] shadow-xl border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 bg-red-100 text-red-600 rounded-bl-3xl">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-8 text-red-600 flex items-center gap-3">
              Traditional Way
            </h3>
            <ul className="space-y-6">
              {[
                "Hours spent searching Telegram groups",
                "Scrolling through messy old PDFs",
                "Missing critical campus announcements",
                "Manual, prone-to-error GPA calculation",
                "No organized study plan or task tracking",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-muted-foreground">
                  <div className="mt-1 p-1 bg-red-100 rounded-full text-red-600">
                    <X className="w-4 h-4" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With App */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary p-8 lg:p-12 rounded-[32px] shadow-2xl shadow-primary/20 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 bg-white/20 rounded-bl-3xl">
              <Smartphone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              With AstuSphere
            </h3>
            <ul className="space-y-6">
              {[
                "Everything centralized in one fast app",
                "AI-powered solutions and explanations",
                "Verified and updated exam archives",
                "Automated instant GPA Calculator",
                "Integrated Student Portal & Notifications",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-white/20 rounded-full text-white">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-8 border-t border-white/10 text-center">
              <p className="text-white/80 font-medium italic">"The app that 90% of toppers use."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
