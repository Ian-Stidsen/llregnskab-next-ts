import Head from 'next/head'
import PageLayout from '@/components/PageLayout'
import pageHeader from '@/styles/header.module.css'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HomeStyles from '@/styles/Home.module.css'

export default function Home() {
  const { t: translate } = useTranslation(['home', 'common']);

  return (
    <>
      <Head>
        <title>LL Regnskab ApS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageLayout>
        <div className={pageHeader.containerMain}>
          <h1 className={pageHeader.title}>{translate('welcome')}</h1>
          <h1 className={pageHeader.title}>{translate('llregnskab')}</h1>
        </div>
        <div className={HomeStyles.container}>
            <div className={HomeStyles.intro}>
              <h2 className={HomeStyles.introTitle}>{translate('llregnskab')}</h2>
              <p className={HomeStyles.introText}>{translate('home_text')}</p>
            </div>
          <div className={HomeStyles.image}></div>
        </div>
      </PageLayout>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
    ...(await serverSideTranslations(locale, ['home', 'common'])),
    },
  }
}
//name, image, email, phone, department, address, cvr 