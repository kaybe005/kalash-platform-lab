import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://kalashbijukchhe.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Kalash Bijukchhe - Platform Lab",
  title: {
    default: "Kalash Bijukchhe - Platform Lab",
    template: "%s | Kalash Bijukchhe",
  },
  description:
    "Aspiring Junior DevOps / Cloud / Platform Engineer based in Sydney, Australia. Kubernetes GitOps, AWS Terraform, CI/CD, Linux, and observability projects.",
  keywords: [
    "DevOps", "Cloud Engineer", "Platform Engineering", "Kubernetes",
    "GitOps", "ArgoCD", "Terraform", "AWS", "CI/CD", "Docker",
    "Linux", "Prometheus", "Grafana", "Sydney", "Kalash Bijukchhe",
  ],
  authors: [{ name: "Kalash Bijukchhe", url: siteUrl }],
  creator: "Kalash Bijukchhe",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Kalash Bijukchhe - Platform Lab",
    description:
      "Aspiring Junior DevOps / Cloud / Platform Engineer. Kubernetes GitOps, AWS Terraform, CI/CD, and observability projects.",
    siteName: "Kalash Bijukchhe - Platform Lab",
    locale: "en_AU",
  },
  twitter: {
    card: "summary",
    title: "Kalash Bijukchhe - Platform Lab",
    description:
      "Aspiring Junior DevOps / Cloud / Platform Engineer. Kubernetes GitOps, AWS Terraform, CI/CD, and observability projects.",
    creator: "@kaybe005",
  },
  robots: { index: true, follow: true },
  category: "portfolio",
};

export const viewport: Viewport = {
  themeColor: "#080B10",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen antialiased" style={{ backgroundColor: "#080B10", color: "#E8EDF2" }}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
