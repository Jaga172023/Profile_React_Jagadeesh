/**
 * Font Usage : Arvo, Goodle fonts
 * 
 * Kindly find the font usage documentation with TailwindCSS from this link: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css
 * 
 */


import NavBar from '@/components/navBar'
import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import Head from 'next/head'


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  )
}
