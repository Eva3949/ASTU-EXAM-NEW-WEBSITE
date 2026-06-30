
"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const reviews = [
  {
    name: "Dagmawi Tekle",
    dept: "Software Engineering",
    rating: 5,
    text: "This app is a lifesaver. No more hunting through dozens of Telegram channels for past exams. The AI companion actually explains things better than some textbooks!",
    img: "student-1",
  },
  {
    name: "Selamawit Kebede",
    dept: "Electrical Engineering",
    rating: 5,
    text: "The GPA calculator is exactly what I needed. I can now track my progress and see what grades I need in finals to reach my goal. Highly recommended!",
    img: "student-2",
  },
  {
    name: "Nahom Girma",
    dept: "Mechanical Engineering",
    rating: 4,
    text: "Great interface and very fast search. The offline access feature is perfect for when campus Wi-Fi acts up. Every ASTU student should have this.",
    img: "student-3",
  },
];

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4">Trusted by <span className="text-primary">Thousands</span></h2>
          <p className="text-muted-foreground text-lg">Here's what your fellow ASTU students are saying.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => {
            const avatar = PlaceHolderImages.find((img) => img.id === rev.img);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-[32px] border border-border/50 relative flex flex-col justify-between"
              >
                <div className="absolute top-6 right-8 text-primary/10">
                  <Quote className="w-12 h-12" />
                </div>
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-8 italic">"{rev.text}"</p>
                </div>
                <div className="flex items-center gap-4 border-t pt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-primary/20">
                    {avatar && (
                      <Image
                        src={avatar.imageUrl}
                        alt={rev.name}
                        fill
                        className="object-cover"
                        data-ai-hint={avatar.imageHint}
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{rev.name}</h4>
                    <p className="text-sm text-muted-foreground">{rev.dept}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
