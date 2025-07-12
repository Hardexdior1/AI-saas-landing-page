
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from './components/Navbar'
import { ReactNode } from "react";
import Footer from './components/Footer'
const inter = Inter({ subsets: ["latin"] })
import {AuthProvider} from './context/PopUpCOntext'


export const metadata = {
  title: "AI-saas-landing-page",
  icons: {
    icon: '/engy-favicon.ico',
  },
  description:"framer-motion",
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
          <Navbar />
        <main>{children}</main>
        <Footer />
      </AuthProvider>
      </body>
    </html>
  )
}

