import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/Components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProtoCoin Faucet",
  description: "The best faucet to get ProtoCoins for free! A max of 1.000 ProtoCoins can be claimed every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange>
      <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}

