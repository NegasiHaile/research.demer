import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const description =
  "Ethiopian Health AI Safety & Research: making sure Ethiopian diseases are accurately recognized by global AI, and that AI is clinically safe before it reaches communities.";

export const metadata: Metadata = {
  metadataBase: new URL("https://research.demer.health"),
  title: "Demer Health Research",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Demer Health Research",
    description,
    url: "https://research.demer.health",
    siteName: "Demer Health Research",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e3f7a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="font-sans selection:bg-brand-100 selection:text-brand-900">
        {children}
      </body>
    </html>
  );
}
