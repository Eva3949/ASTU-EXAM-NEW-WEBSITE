import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service - ASTU EXAM",
  description: "Terms and conditions for using the ASTU EXAM website and study tools.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline transition-all mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 border-b border-slate-800 pb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Terms of Service</h1>
            <p className="text-sm text-slate-400 mt-1">
              Last updated: October 2024 • ASTU EXAM
            </p>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the <strong>ASTU EXAM</strong> platform, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">2. Educational Purpose</h2>
            <p>
              All materials, past examinations, notes, and study aids provided on ASTU EXAM are made available for educational and study reference purposes only. They are intended to assist university students in their academic preparation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">3. Intellectual Property</h2>
            <p>
              The code, design, branding, and proprietary algorithms of ASTU EXAM are the property of Eva Development Studio. All referenced course names, university insignia, and examination papers remain the property of their respective academic authorities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">4. User Conduct</h2>
            <p>
              Users agree not to disrupt or interfere with the platform&apos;s security, servers, or networks, nor engage in automated data scraping without explicit permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">5. Disclaimer of Warranties</h2>
            <p>
              The platform and all materials are provided &ldquo;as is&rdquo; without warranties of any kind. We strive for accuracy but do not guarantee that exam solutions or AI explanations are completely error-free.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">6. Contact</h2>
            <p>
              For questions regarding these Terms, contact us at:
            </p>
            <p className="text-slate-400 font-mono text-sm bg-slate-900 p-3 rounded-lg border border-slate-800 inline-block">
              Email: legal@astuexam.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
