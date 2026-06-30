
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
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>AI-POWERED INSIGHTS</span>
          </div>
          <h2 className="text-4xl font-headline font-bold mb-6">
            Meet Your <span className="text-primary">AI Study Companion</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't get stuck on complex concepts. Ask our AI for a simplified explanation tailored for ASTU students.
          </p>
        </div>

        <Card className="glass rounded-[32px] border-border/50 shadow-2xl overflow-hidden">
          <CardContent className="p-8 lg:p-12">
            <form onSubmit={handleAsk} className="relative flex gap-2 mb-8">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: Explain Schrodinger's Cat simply..."
                className="h-14 rounded-2xl pr-32 text-lg border-2 focus-visible:ring-primary shadow-inner"
              />
              <Button 
                type="submit" 
                disabled={loading}
                className="absolute right-2 top-2 h-10 px-6 rounded-xl shadow-lg"
              >
                {loading ? <Loader2 className="animate-spin" /> : <><Send className="w-4 h-4 mr-2" /> Ask AI</>}
              </Button>
            </form>

            <AnimatePresence mode="wait">
              {explanation ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-primary/5 p-6 rounded-2xl border border-primary/20 relative"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 pl-6">Explanation:</h4>
                  <p className="text-foreground/80 leading-relaxed pl-6 whitespace-pre-wrap">
                    {explanation}
                  </p>
                </motion.div>
              ) : loading ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-muted-foreground">
                  <Loader2 className="w-10 h-10 animate-spin text-primary" />
                  <p className="animate-pulse">Analyzing ASTU curriculum data...</p>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground border-2 border-dashed border-border rounded-2xl">
                  <p>Try asking: "Explain the difference between TCP and UDP"</p>
                </div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-purple-400/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
};
