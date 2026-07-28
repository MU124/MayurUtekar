import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayur Utekar | Senior Full Stack Engineer & Team Lead",
  description:
    "Senior Full Stack Engineer with 8+ years of experience engineering enterprise software, backend APIs, database optimizations, and web applications across banking, digital signage, and retail domains.",
  keywords: [
    "Mayur Utekar",
    "Mayur Rajendra Utekar",
    "Senior Full Stack Engineer",
    "Team Lead",
    "ASP.NET Core",
    "C#",
    "Angular",
    "React",
    "SQL Server",
    "Full Stack Developer Mumbai",
  ],
  authors: [{ name: "Mayur Rajendra Utekar" }],
  openGraph: {
    title: "Mayur Utekar | Senior Full Stack Engineer & Team Lead",
    description:
      "Enterprise Full Stack Engineer with 8+ years delivering scalable software solutions.",
    type: "website",
    locale: "en_US",
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
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
