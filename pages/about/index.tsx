import PageLayout from "@/components/PageLayout";
import Head from "next/head";
import introStyles from '@/styles/intro.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>LL Regnskab - About</title>
      </Head>
      <PageLayout>
        <div className={introStyles.container}>
          <h1 className={introStyles.title}>About LL Regnskab ApS</h1>
        </div>
        About
      </PageLayout>
    </>
  )
}