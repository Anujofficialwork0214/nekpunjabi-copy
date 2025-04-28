import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Nek Punjabi Estate ",
  description: "Nek Punjabi Estate simplifies real estate in Punjab, offering expert guidance and services for buying, selling, and investing in property.",
  icons: {
    icon: "/blacklogo.png", 
  },
  openGraph: {
    title: "Nek Punjabi Estate | Trusted Real Estate Services in Punjab",
    description: "Explore expert real estate services with Nek Punjabi Estate. Helping you find the best real estate deals in Punjab.",
    images: [
      {
        url: "/blacklogo.png", 
        width: 1200,
        height: 630,
        alt: "Nek Punjabi Estate Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: "Nek Punjabi Estate | Trusted Real Estate Services in Punjab",
    description: "Find the best properties with Nek Punjabi Estate. Expert services for buying, selling, and investing in real estate in Punjab.",
    images: ["/blacklogo.png"],  
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <div className="container max-w-[1920px] overflow-x-hidden mx-auto">
          <Navbar />
         
          {children}
       

          <Footer />
        </div>
      </body>
    </html>
  );
}
