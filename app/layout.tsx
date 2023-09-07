"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with ❤️ from Kevin Kipkemboi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <ThemeProvider defaultTheme="light" attribute="class">
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
