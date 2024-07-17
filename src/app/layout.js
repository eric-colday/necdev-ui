import Navbar from "@/components/Navbar";
import { GoogleTagManager } from '@next/third-parties/google'
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { inter, yeseva_One } from "@/fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "Eric Colday Noubissi : Consultant Webmarketing et Data",
  description:
    "Découvrez les services de Eric Colday Noubissi, consultant webmarketing expert en SEO, SEA, Analytics, création de sites web avec WordPress et NextJs. Boostez votre visibilité en ligne avec un expert.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <GoogleTagManager gtmId="GTM-XYZ" />
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
