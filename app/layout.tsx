import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/hooks/providers";

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
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="5ukG7IlZq9SlEgdYDdvx85MOjX_IUOj0iJb6TH5ffvE"
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
