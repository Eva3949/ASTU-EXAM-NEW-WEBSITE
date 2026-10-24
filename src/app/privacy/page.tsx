import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - ASTU EXAM",
  description: "Privacy Policy and Google AdSense cookie disclosure for ASTU EXAM.",
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-slate-400 mt-1">
              Last updated: October 2024 • ASTU EXAM
            </p>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
            <p>
              Welcome to <strong>ASTU EXAM</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting any personal information you provide when using our website and mobile application. This Privacy Policy outlines what information we collect, how it is used, and how advertising partners like Google AdSense handle data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">2. Google AdSense & Cookies</h2>
            <p>
              We display advertisements on our website through <strong>Google AdSense</strong> to support free access to study materials and past exams for students. Google and third-party vendors use cookies to serve ads based on your prior visits to our website or other websites on the internet:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>
                Google&apos;s use of advertising cookies enables it and its partners to serve personalized ads to you based on your visit to our website and/or other websites.
              </li>
              <li>
                You may opt out of personalized advertising at any time by visiting{" "}
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  Google Ads Settings
                </a>.
              </li>
              <li>
                Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  aboutads.info
                </a>.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">3. Information We Collect</h2>
            <p>
              We do not collect sensitive personal data. If you use our newsletter or contact forms, we may collect your name and email address solely for communication and support purposes. Standard web analytics (such as browser type, referring pages, and device operating system) may be logged anonymously to optimize website performance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to safeguard any data we process. We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">5. Children&apos;s Privacy</h2>
            <p>
              Our services are intended for university students and adult learners. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">6. Contact Us</h2>
            <p>
              If you have any questions or feedback regarding this Privacy Policy, please reach out to us at:
            </p>
            <p className="text-slate-400 font-mono text-sm bg-slate-900 p-3 rounded-lg border border-slate-800 inline-block">
              Email: contact@astuexam.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
