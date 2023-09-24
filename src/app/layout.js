import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Providers } from './providers'
import './globals.css'

export const metadata = {
  title: 'Dirección Nacional de Ciencias Espaciales',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="">
        <Providers>
          <Navbar />
          <main className="min-h-[calc(100vh-80px)] dark:bg-[#18202b] dark:text-white bg-white ">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
