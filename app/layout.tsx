
"use client";
import './globals.css';
import LoadingScreen from "@/components/ui/loading-screen";
import { useState, useEffect } from "react";
import { portfolioConfig } from "@/config/portfolio-config";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{portfolioConfig.personal.name} Portfolio</title>
        <meta name="description" content={portfolioConfig.personal.bio} />
      </head>
      <body>
        {loading && <LoadingScreen />}
        <div style={{ display: loading ? 'none' : undefined }}>{children}</div>
      </body>
    </html>
  );
}
