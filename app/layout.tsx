import type { Metadata } from 'next'
/* import { Inter } from 'next/font/google' */
import {Poppins } from "next/font/google";
import './globals.css'
import { Toaster } from 'react-hot-toast'

/* const inter = Inter({ subsets: ['latin'] }) */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Customize based on the weights you need
});

export const metadata: Metadata = {
  title: 'WiFi Hotspot Billing',
  description: 'Simple billing app for WiFi hotspot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  )
}

