import localFont from 'next/font/local';


const mori = localFont({
  src: '../public/fonts/PPMori-Regular.woff2',
});

import "./globals.css";
import Navbar from '@/components/Layouts/Home/Navbar/Navbar';
import Footer from '@/components/Layouts/Home/Footer/Footer';
import { ReduxProvider } from '@/components/Redux/store/ReduxProvider';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "FitGrips® -Premium Fitness Gear, Grips, Belts & more Designed for Powerlifters",
  description: "Elevate your fitness routine with workout accessories from FitGrips. Fill your gym bag with FitGrips Lifting Belts, Lifting Straps, Ankle Straps, and more!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mori.className} antialiased flex flex-col h-screen overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <ReduxProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#4ade80',
                  secondary: '#fff',
                },
              },
            }}
          />
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
