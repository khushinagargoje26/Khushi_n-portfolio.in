import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khushi Nagargoje — Data & AI Engineer",
  description: "Data Engineer building scalable cloud pipelines, AI-powered systems, and intelligent data products. 2+ years across the full data stack.",
  keywords: ["Data Engineer", "AI Engineer", "LLM", "RAG", "AWS", "Generative AI", "ETL"],
  authors: [{ name: "Khushi Nagargoje" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=JetBrains+Mono:ital,wght@0,300;0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
