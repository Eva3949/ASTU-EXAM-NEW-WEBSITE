
"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How do I install the ASTU Exam App?",
    a: "Simply download the APK file from our website and open it on your Android device. Make sure to allow installations from 'Unknown Sources' in your security settings temporarily if prompted."
  },
  {
    q: "Is the app free to use?",
    a: "Yes! The core features including past exams, GPA calculator, and portal access are completely free for all ASTU students."
  },
  {
    q: "Does it work offline?",
    a: "Absolutely. You can download exam papers and study materials directly to your local storage to access them anytime, even without an internet connection."
  },
  {
    q: "Which departments are supported?",
    a: "We currently support all major departments in ASTU, including Software Engineering, Electrical, Mechanical, Civil, Applied Sciences, and Architecture."
  },
  {
    q: "How often are the exams updated?",
    a: "Our community and team update the archives after every semester. You can expect the latest exams to be available within weeks of the exam period."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Everything you need to know about the app.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="glass px-6 rounded-2xl border-border/50 shadow-sm overflow-hidden border">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
