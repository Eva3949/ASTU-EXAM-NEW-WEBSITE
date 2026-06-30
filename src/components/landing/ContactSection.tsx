
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">Have questions or want to contribute? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass p-10 rounded-[40px] border border-border/50 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                    <Input placeholder="John Doe" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="h-12 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                  <Input placeholder="Support Request" className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                  <Textarea placeholder="How can we help?" className="min-h-[150px] rounded-xl py-4" />
                </div>
                <Button className="w-full h-14 rounded-xl text-lg font-bold gap-2">
                  <Send className="w-5 h-5" /> Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email Us</h4>
                  <p className="text-muted-foreground">Evadevstudio@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Join Telegram</h4>
                  <p className="text-muted-foreground">@Evadevstudio</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Call Support</h4>
                  <p className="text-muted-foreground">+251 939 499 987</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Our Location</h4>
                  <p className="text-muted-foreground">Addis Ababa & Adama Science and Technology University, Adama, Ethiopia</p>
                </div>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="flex-1 min-h-[250px] rounded-[40px] bg-slate-200 overflow-hidden relative border-4 border-white shadow-xl">
              <div className="absolute inset-0 bg-cover bg-center grayscale opacity-70" style={{ backgroundImage: `url('https://picsum.photos/seed/map/800/600')` }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-white p-4 rounded-full shadow-2xl animate-bounce">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
