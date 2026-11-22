import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// Same typeface as demer.health
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const description =
  "Ethiopian Health AI Safety & Research: making sure global AI accurately recognizes Ethiopian health cases, and is clinically safe before it harms communities.";

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
  themeColor: "#2a6cb0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} antialiased`}
    >
      <body className="font-sans selection:bg-brand-100 selection:text-brand-900">
        {children}
      </body>
    </html>
  );
}
