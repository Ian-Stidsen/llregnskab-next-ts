import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PageLayout from '@/components/PageLayout'
import introStyles from '@/styles/intro.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>LL Regnskab ApS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageLayout>
        <div className={introStyles.containerMain}>
          <h1 className={introStyles.title}>Welcome to</h1>
          <h1 className={introStyles.title}>LL Regnskab ApS</h1>
        </div>
      </PageLayout>
    </>
  )
}
//name, image, email, phone, department, address, cvr 