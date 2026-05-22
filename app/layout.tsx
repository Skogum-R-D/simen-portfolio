import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simen's Portfolio",
  description: "Founder & CTO, Skogum R&D",
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
