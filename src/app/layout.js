import { Signika } from "next/font/google";
import { Viewport } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const signika = Signika({
  subsets: ['latin'],
  weight:'variable',
  display: 'swap',
  variable: '--font-signika'
})

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false
}

export const metadata = {
  title: "Terra Segara",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo Initial (two tone).ico" sizes="any" />
      </head>
      <body className={`${signika.className} max-w-full w-full flex flex-col items-center sm:mx-auto bg-gradient-to-b from-white to-white scroll-smooth`}>
          <Navbar />
          {children}
          <ScrollToTop />
          <footer>
            <Footer />
          </footer>
      </body>
    </html>
  );
}
