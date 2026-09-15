import type { Metadata, Viewport } from "next";
import { Pixelify_Sans, Press_Start_2P, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pressStart = Press_Start_2P({
  variable: "--font-8bit",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#E31B23",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Praveen L Kumbalur | AI/ML Engineer & Full-Stack Developer",
  description: "Portfolio of Praveen L Kumbalur — AI/ML Engineer and Full-Stack Developer building intelligent systems with AI, RAG, computer vision, NLP, and modern web technologies.",
  keywords: [
    "Praveen L Kumbalur",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "RAG",
    "Computer Vision",
    "NLP",
    "Next.js",
    "React",
    "Three.js",
    "Pixel Art Portfolio"
  ],
  authors: [{ name: "Praveen L Kumbalur" }],
  creator: "Praveen L Kumbalur",
  openGraph: {
    title: "Praveen L Kumbalur | AI/ML Engineer & Full-Stack Developer",
    description: "Building intelligent systems that turn ideas into reality. 3D pixel-art interactive portfolio.",
    url: "https://praveen-portfolio.vercel.app",
    siteName: "Praveen L Kumbalur Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen L Kumbalur | AI/ML Engineer & Full-Stack Developer",
    description: "Building intelligent systems that turn ideas into reality. 3D pixel-art interactive portfolio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pixelifySans.variable} ${pressStart.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-[#111111] antialiased selection:bg-[#E31B23] selection:text-white">
        {children}
      </body>
    </html>
  );
}
