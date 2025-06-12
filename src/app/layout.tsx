import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Footer from '@/components/Footer' // ✅ Add this line

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'NorthViaMarketing',
  description: 'Dream bigger. Compete smarter. Win together.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body text-brand-blue bg-white">
        <main>{children}</main>
        <Footer /> {/* ✅ Add Footer at the end of every page */}
      </body>
    </html>
  )
}
