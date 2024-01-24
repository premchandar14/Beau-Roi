
import './globals.css'
import Navbar from '@/components/Navbar';

import Footer from '@/components/Footer';
import MegaMenu from '@/components/MegaMenu';

import 'materialize-css/dist/css/materialize.min.css';

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beauroi',
  description: 'Delivering cutting-edge solutions that empower businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body > 
        {/* <Navbar/> */}

        <MegaMenu/>
            <main className="relative orverflow-hidden">{children} </main>
        <Footer />
      </body>
    </html>
  )
}
