import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Quiz Dev",
  description: "Teste seus conhecimentos como desenvolvedor JS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
