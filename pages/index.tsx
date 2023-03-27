import Head from 'next/head'
import { Inter } from 'next/font/google'
import PageLayout from '@/components/PageLayout'
import introStyles from '@/styles/intro.module.css'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

//const inter = Inter({ subsets: ['latin'] })


function Home() {

  const { t: translate } = useTranslation(['home', 'common']);

  return (
    <>
      <Head>
        <title>LL Regnskab ApS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageLayout>
        <div className={introStyles.containerMain}>
          <h1 className={introStyles.title}>{translate('welcome')}</h1>
          <h1 className={introStyles.title}>{translate('llregnskab')}</h1>
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

export default Home;
//name, image, email, phone, department, address, cvr 