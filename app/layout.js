import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor  from "@/components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Waqas Raza (wqsrz)",
  description:
    "Waqas Raza (wqsrz) - Full Stack Developer & Web Designer in Sydney. I build scalable, responsive, and interactive web applications.",
  icons: {
    icon: "/3dcart.png",
    shortcut: "/3dcart.png",
    apple: "/3dcart.png",
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* SVG Filter */}
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>

        {/* Main custom cursor */}
        <Cursor />

        {children}
      </body>
    </html>
  );
}

