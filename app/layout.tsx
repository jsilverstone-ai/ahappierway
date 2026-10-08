import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Kelsey Vivatson, PMHNP-BC | Psychiatric Care in Aventura & Miami",
  description:
    "Kelsey Vivatson, PMHNP-BC, APRN, offers psychiatric assessment, medication management, and psychotherapy in Aventura, serving Miami and South Florida. ¡Hablamos Español!",
  alternates: { canonical: site.canonical },
  openGraph: {
    title: "A Happier Way | Kelsey Vivatson, PMHNP-BC",
    description:
      "Psychiatric care in Aventura for ADHD, autism, and mood concerns across the lifespan.",
    url: site.canonical,
    siteName: "A Happier Way",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
