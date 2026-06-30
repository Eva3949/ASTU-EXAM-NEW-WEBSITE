
"use client";

import React from "react";
import { 
  FileText, BrainCircuit, Calculator, Globe, Clock, 
  LayoutDashboard, Bell, CheckSquare, Layers, WifiOff, Search, Moon 
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: FileText, title: "Past Exams", color: "bg-blue-100 text-blue-600", desc: "Access thousands of verified past exam papers for all ASTU departments." },
  { icon: BrainCircuit, title: "AI Study Assistant", color: "bg-purple-100 text-purple-600", desc: "Get intelligent, simple explanations for complex ASTU exam questions." },
  { icon: CheckSquare, title: "Task Management", color: "bg-teal-100 text-teal-600", desc: "Plan your study sessions and track academic goals with an integrated planner." },
  { icon: Clock, title: "Pomodoro Timer", color: "bg-orange-100 text-orange-600", desc: "Boost your productivity with a focus timer tailored for long study blocks." },
  { icon: Calculator, title: "GPA Calculator", color: "bg-green-100 text-green-600", desc: "Easily track and forecast your semester GPA with automated grade inputs." },
  { icon: Globe, title: "Student Portal", color: "bg-indigo-100 text-indigo-600", desc: "Quick access to your ASTU student portal without leaving the application." },
  { icon: Bell, title: "Announcements", color: "bg-yellow-100 text-yellow-600", desc: "Stay updated with real-time campus news and official exam schedules." },
  { icon: LayoutDashboard, title: "Mock Exams", color: "bg-red-100 text-red-600", desc: "Practice under pressure with timed mock tests designed for ASTU standards." },
  { icon: Layers, title: "Department Filters", color: "bg-cyan-100 text-cyan-600", desc: "Browse materials organized by year, department, and specific course codes." },
  { icon: WifiOff, title: "Offline Access", color: "bg-gray-100 text-gray-600", desc: "Download materials to your device and study anywhere without an internet connection." },
  { icon: Search, title: "Global Search", color: "bg-pink-100 text-pink-600", desc: "Find any course code or subject keyword across all study resources instantly." },
  { icon: Moon, title: "Dark Mode", color: "bg-slate-800 text-white", desc: "Protects your eyes during late-night study sessions with a premium dark interface." },
];

export const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold font-headline mb-4"
          >
            Everything You Need to <span className="text-primary">Excel</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've built a comprehensive toolset specifically for ASTU students to stay organized and perform better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass p-8 rounded-3xl border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
