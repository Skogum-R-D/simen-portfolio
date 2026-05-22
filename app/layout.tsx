import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simen | Founder & CTO — Skogum R&D",
  description: "Building autonomous AI agent systems that plan, implement, and ship software end-to-end.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0a0f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
