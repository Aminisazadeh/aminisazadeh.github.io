import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import "katex/dist/katex.min.css";
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <AnimatePresence mode='wait'> 
            <Component key={router.asPath} {...pageProps} /> 
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
