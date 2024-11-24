import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const futuraLight = localFont({
  src: "./fonts/FuturaLight.otf",
  variable: "--font-futura-light",
});

const futuraMedium = localFont({
  src: "./fonts/FuturaMedium.ttf",
  variable: "--font-futura-medium",
});

const futuraBold = localFont({
  src: "./fonts/FuturaBold.ttf",
  variable: "--font-futura-bold",
});

const carolloMedium = localFont({
  src: "./fonts/CarolloMedium.otf",
  variable: "--font-carollo-medium",
});

export const metadata: Metadata = {
  title: "Guia da Mantiqueira",
  description: "Conhecendo o melhor de Itajubá!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${futuraLight.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
