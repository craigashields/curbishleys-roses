import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

