import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copetti's Barbershop - Links",
  description: "Mais que uma barbearia, um lugar de transformação.",
  keywords: "barbearia, corte de cabelo, barba, Copetti's",
  authors: [{ name: "Copetti's Barbershop" }],
  openGraph: {
    title: "Copetti's Barbershop",
    description: "Mais que uma barbearia, um lugar de transformação.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
