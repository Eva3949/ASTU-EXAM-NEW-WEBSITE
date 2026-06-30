
"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Downloads" },
  { value: "20K+", label: "Questions" },
  { value: "150+", label: "Courses" },
  { value: "4.9★", label: "Student Rating" },
  { value: "99%", label: "Positive Reviews" },
];

export const Statistics = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <h3 className="text-4xl lg:text-5xl font-extrabold text-primary mb-2 font-headline group-hover:scale-110 transition-transform">
                {stat.value}
              </h3>
              <p className="text-muted-foreground font-medium uppercase tracking-wide text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
