import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
