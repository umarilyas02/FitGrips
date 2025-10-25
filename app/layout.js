import localFont from 'next/font/local';


const mori = localFont({
  src: '../public/fonts/PPMori-Regular.woff2',
});

import "./globals.css";

export const metadata = {
  title: "FitGrips® -Premium Fitness Gear, Grips, Belts & more Designed for Powerlifters",
  description: "Elevate your fitness routine with workout accessories from FitGrips. Fill your gym bag with FitGrips Lifting Belts, Lifting Straps, Ankle Straps, and more!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mori.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
