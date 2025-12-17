import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { FloatingNavigation } from "@/components/floating-navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toru Gabriel | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Toru Gabriel, a full-stack developer with 2+ years of experience building scalable web applications, fintech solutions, and dynamic platforms using TypeScript, Next.js, React, and Node.js.",
  keywords: [
    "Toru Gabriel",
    "Full-Stack Developer",
    "Frontend Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Ecommerce Developer",
    "Fintech Developer",
    "Web Developer",
  ],
  authors: [{ name: "Toru Gabriel" }],
  creator: "Toru Gabriel",
  openGraph: {
    title: "Toru Gabriel | Full-Stack Developer Portfolio",
    description:
      "Explore the portfolio of Toru Gabriel, showcasing fintech apps, car rental platforms, and scalable web projects built with React, Next.js, and TypeScript.",
    url: "https://torutgabriel.site",
    siteName: "Toru Gabriel Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Toru Gabriel Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toru Gabriel | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer specializing in React, Next.js, and TypeScript. View projects, fintech apps, and web platforms.",
    images: ["/og-image.webp"],
    creator: "@temi_dy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} max-w-440 mx-auto antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <FloatingNavigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
