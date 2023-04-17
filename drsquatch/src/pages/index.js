import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Bundles } from '../components/bundle'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Squatch</title>
        <meta name="description" content="Dr. Squatch provides organic and natural handmade soap to men who want to feel like a man, and smell like a champion." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        <Bundles />
        </div>
      </main>
    </> 
  )
}
