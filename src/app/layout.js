import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nek Punjab Estate",
  icons: {
    icon: "/neklogo.png",
  },
  keywords: ["Nek Punjab Estate", "Real Estate", "Punjab", "Property"],
  authors: [{ name: "Nek Punjab Estate" }],

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <link rel="icon" href="/neklogo.png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container overflow-x-hidden mx-auto">
          <Header />
         
          {children}
       

          <Footer />
        </div>
      </body>
    </html>
  );
}
