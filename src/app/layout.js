// import Navbar from "@/components/Navbar";

import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata() {
  const client = createClient();

  const settings = await client.getSingle("navbar");

  return {
    title:
      settings.data.site_title ||
      "Eric Colday Noubissi : Consultant Webmarketing et Data",
    description:
      settings.data.meta_description ||
      "Découvrez les services de Eric Colday Noubissi, consultant webmarketing expert en SEO, SEA, Analytics, création de sites web avec WordPress et NextJs. Boostez votre visibilité en ligne avec un expert.",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <GoogleTagManager gtmId="GTM-XYZ" />
      <SpeedInsights />
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer/>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
