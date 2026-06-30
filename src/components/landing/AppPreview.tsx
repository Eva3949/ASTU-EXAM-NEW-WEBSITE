
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

export const AppPreview = () => {
  const screenshots = PlaceHolderImages.filter(img => img.id.startsWith("screenshot-"));

  return (
    <section id="preview" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline mb-4">Experience the <span className="text-primary">Interface</span></h2>
          <p className="text-xl text-muted-foreground">Clean, intuitive, and designed for speed.</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pb-12"
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper !pb-14"
            breakpoints={{
              320: { slidesPerView: 1.5 },
              640: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4.5 },
            }}
          >
            {screenshots.map((shot, idx) => (
              <SwiperSlide key={idx} className="!w-[260px] lg:!w-[300px]">
                <div className="relative aspect-[9/19] rounded-[40px] border-[6px] border-foreground bg-foreground shadow-2xl overflow-hidden group">
                  <Image
                    src={shot.imageUrl}
                    alt={shot.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={shot.imageHint}
                  />
                </div>
                <p className="text-center mt-4 font-medium text-muted-foreground">{shot.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};
