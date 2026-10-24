"use client";

import React, { useEffect, useRef } from "react";

interface AdBannerProps {
  /**
   * AdSense Ad unit slot ID (e.g., "1234567890").
   * Optional initially if you only rely on Auto Ads, but required for manual ad units.
   */
  slot?: string;
  /**
   * Ad format: "auto", "fluid", "rectangle", "horizontal", "vertical". Default is "auto".
   */
  format?: string;
  /**
   * Enable responsive full-width behavior. Default is true.
   */
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export const AdBanner: React.FC<AdBannerProps> = ({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  style,
}) => {
  const adRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef(false);
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-2133206843621747";
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    // Only push if running in browser and hasn't been pushed yet
    if (!pushedRef.current && adRef.current) {
      try {
        if (typeof window !== "undefined") {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushedRef.current = true;
        }
      } catch (err) {
        // Suppress expected AdSense reload/refresh errors during client-side hydration
        if (isDev) {
          console.debug("AdSense push:", err);
        }
      }
    }
  }, [isDev]);

  return (
    <div className={`w-full overflow-hidden my-6 text-center ${className}`}>
      {/* Label for Google AdSense compliance */}
      <span className="block text-[11px] font-medium tracking-wider text-slate-400 uppercase mb-1.5">
        Advertisement
      </span>

      <div className="min-h-[90px] flex items-center justify-center bg-slate-900/40 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
        {isDev && !slot ? (
          <div className="py-6 px-4 text-xs text-slate-400 flex flex-col items-center gap-1">
            <span className="font-semibold text-primary">Google AdSense Space</span>
            <span>(Client: {clientId} | Live ads will show here in production once approved)</span>
          </div>
        ) : (
          <ins
            ref={adRef}
            className="adsbygoogle block w-full"
            style={{ display: "block", minHeight: "90px", ...style }}
            data-ad-client={clientId}
            {...(slot ? { "data-ad-slot": slot } : {})}
            data-ad-format={format}
            data-full-width-responsive={responsive ? "true" : "false"}
          />
        )}
      </div>
    </div>
  );
};
