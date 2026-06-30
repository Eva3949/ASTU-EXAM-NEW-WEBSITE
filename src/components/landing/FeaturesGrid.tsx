
"use client";

import React from "react";
import { 
  FileText, BrainCircuit, Calculator, Globe, Code, 
  LayoutDashboard, Bell, CheckSquare, Layers, WifiOff, Search, Moon 
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: FileText, title: "Past Exams", color: "bg-blue-100 text-blue-600", desc: "Access thousands of verified past exam papers." },
  { icon: BrainCircuit, title: "AI Study Assistant", color: "bg-purple-100 text-purple-600", desc: "Get intelligent explanations for tough questions." },
  { icon: Calculator, title: "GPA Calculator", color: "bg-green-100 text-green-600", desc: "Track and forecast your academic performance." },
  { icon: Globe, title: "Student Portal", color: "bg-orange-100 text-orange-600", desc: "Integrated access to official university resources." },
  { icon: Code, title: "Code Runner", color: "bg-red-100 text-red-600", desc: "Run your programming assignments inside the app." },
  { icon: LayoutDashboard, title: "Mock Exams", color: "bg-indigo-100 text-indigo-600", desc: "Practice with timed simulations for better readiness." },
  { icon: Bell, title: "Announcements", color: "bg-yellow-100 text-yellow-600", desc: "Never miss a campus update with real-time alerts." },
  { icon: CheckSquare, title: "Study Tasks", color: "bg-teal-100 text-teal-600", desc: "Manage your study schedule with a built-in task list." },
  { icon: Layers, title: "Exam Categories", color: "bg-cyan-100 text-cyan-600", desc: "Browse exams organized by year and department." },
  { icon: WifiOff, title: "Offline Access", color: "bg-gray-100 text-gray-600", desc: "Download exams and study anywhere without internet." },
  { icon: Search, title: "Fast Search", color: "bg-pink-100 text-pink-600", desc: "Instant results for any course or topic you need." },
  { icon: Moon, title: "Dark Mode", color: "bg-slate-800 text-white", desc: "Easier on your eyes for late-night study sessions." },
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
            Packed with advanced tools designed specifically for the ASTU curriculum and student lifestyle.
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
