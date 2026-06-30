"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrainCircuit, Send, Loader2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { aiStudyCompanionExplanation } from "@/ai/flows/ai-study-companion-explanation";
import { Card, CardContent } from "@/components/ui/card";

export const AIStudyTool = () => {
  const [input, setInput] = useState("");
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setExplanation(null);
    try {
      const res = await aiStudyCompanionExplanation({ examQuestionOrConcept: input });
      setExplanation(res.explanation);
    } catch (err) {
      setExplanation("Sorry, I couldn't generate an explanation right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full text-xs font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>AI-POWERED INSIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4 sm:mb-6 leading-tight">
            Meet Your <span className="text-primary">AI Study Companion</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed px-4">
            Don't get stuck on complex concepts. Ask our AI for a simplified explanation tailored for ASTU students.
          </p>
        </div>

        <Card className="glass rounded-[2rem] border-border/50 shadow-2xl overflow-hidden mx-auto">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            <form onSubmit={handleAsk} className="relative flex flex-col sm:flex-row gap-3 mb-8">
              <div className="relative flex-1">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ex: Explain TCP vs UDP..."
                  className="h-14 rounded-2xl pr-4 text-base sm:text-lg border-2 focus-visible:ring-primary shadow-inner bg-white/50 dark:bg-black/20"
                />
              </div>
              <Button 
                type="submit" 
                disabled={loading}
                className="h-14 px-8 rounded-2xl shadow-lg active:scale-95 transition-transform"
              >
                {loading ? <Loader2 className="animate-spin" /> : <><Send className="w-4 h-4 mr-2" /> Ask AI</>}
              </Button>
            </form>

            <AnimatePresence mode="wait">
              {explanation ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-primary/5 p-6 rounded-2xl border border-primary/20 relative"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 pl-6">Explanation:</h4>
                  <p className="text-foreground/80 leading-relaxed pl-6 whitespace-pre-wrap text-base">
                    {explanation}
                  </p>
                </motion.div>
              ) : loading ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-muted-foreground text-center">
                  <div className="relative">
                    <Loader2 className="w-12 h-12 animate-spin text-primary" />
                    <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-purple-500 animate-pulse" />
                  </div>
                  <p className="animate-pulse font-medium">Analyzing ASTU curriculum data...</p>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground border-2 border-dashed border-border rounded-2xl bg-slate-50/50 dark:bg-slate-900/50">
                  <p className="text-base">Try asking: "What is Software Architecture?"</p>
                </div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-purple-400/5 sm:bg-purple-400/10 blur-[80px] sm:blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 sm:bg-primary/10 blur-[100px] sm:blur-[120px] rounded-full -z-10" />
    </section>
  );
};