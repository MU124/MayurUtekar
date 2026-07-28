import type { Metadata, Viewport } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f17" },
  ],
};

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
  metadataBase: new URL("https://mayur-utekar.vercel.app"),
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
    url: "https://mayur-utekar.vercel.app",
    siteName: "Mayur Utekar Portfolio",
    images: [
      {
        url: "/mayur.png",
        width: 800,
        height: 800,
        alt: "Mayur Rajendra Utekar - Senior Full Stack Engineer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayur Utekar | Senior Full Stack Engineer & Team Lead",
    description:
      "Enterprise Full Stack Engineer with 8+ years delivering scalable software solutions.",
    images: ["/mayur.png"],
  },
  icons: {
    icon: [{ url: "/icon.png" }, { url: "/mayur.png" }],
    shortcut: "/mayur.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mayur Rajendra Utekar",
    jobTitle: "Senior Full Stack Engineer & Team Lead",
    worksFor: {
      "@type": "Organization",
      name: "Digital Automation Enterprises",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    email: "mayurutekar124@gmail.com",
    url: "https://mayur-utekar.vercel.app",
    sameAs: [
      "https://www.linkedin.com/in/mayur-utekar-887482131",
      "https://github.com/MU124",
    ],
    knowsAbout: [
      "ASP.NET Core",
      "C#",
      "Microsoft SQL Server",
      "Angular",
      "React",
      "Vue.js",
      "RESTful Web APIs",
      "SignalR",
      "Enterprise Architecture",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
