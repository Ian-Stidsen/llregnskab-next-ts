import PageLayout from "@/components/PageLayout";
import Head from "next/head";
import introStyles from '@/styles/intro.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";

export default function About() {
  const { t: translate } = useTranslation(['about', 'common']);

  return (
    <>
      <Head>
        <title>LL Regnskab - About</title>
      </Head>
      <PageLayout>
        <div className={introStyles.container}>
          <h1 className={introStyles.title}>{translate('about_us')}</h1>
        </div>
        About
      </PageLayout>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
    ...(await serverSideTranslations(locale, ['about', 'common'])),
    },
  }
}