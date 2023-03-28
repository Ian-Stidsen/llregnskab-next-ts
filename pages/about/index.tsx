import PageLayout from "@/components/PageLayout";
import Head from "next/head";
import pageHeader from '@/styles/header.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";
import AboutStyles from '@/styles/About.module.css'

export default function About() {
  const { t: translate } = useTranslation(['about', 'common']);

  return (
    <>
      <Head>
        <title>LL Regnskab - About</title>
      </Head>
      <PageLayout>
        <div className={pageHeader.container}>
          <h1 className={pageHeader.title}>{translate('about_us')}</h1>
        </div>
        <div className={AboutStyles.container}>
          <div className={AboutStyles.about}>
            <div className={AboutStyles.aboutUs}>
              <h2>{translate('about_us')}</h2>
              <p>{translate('about_text')}</p>
          </div>

            <div className={AboutStyles.work}>
              <h2>{translate('work.title')}</h2>
              <ul>
                <li>{translate('work.1')}</li>
                <li>{translate('work.2')}</li>
                <li>{translate('work.3')}</li>
                <li>{translate('work.4')}</li>
                <li>{translate('work.5')}</li>
              </ul>
            </div>
          </div>

          <div className={AboutStyles.image}></div>
        </div>
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