import { Geist, Geist_Mono, Anek_Bangla } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistAnek = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OOO КОММИТ",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} ${geistAnek.variable}`}>
        {children}
      </body>
    </html>
  );
}
