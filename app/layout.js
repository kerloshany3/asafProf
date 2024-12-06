import localFont from "next/font/local";
import "./globals.css";

import { Abril_Fatface } from 'next/font/google';

const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: '400', // Adjust based on the font options
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Asaf Prof",
  description: "Empowering Dreams Through Education and Opportunity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
