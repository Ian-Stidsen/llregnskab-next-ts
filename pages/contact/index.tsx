import { ContactCard } from "@/components/ContactCard";
import PageLayout from "@/components/PageLayout";
import Head from "next/head";
import cardStyles from '@/styles/cards.module.css'
import introStyles from '@/styles/intro.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";

export default function Contact() {
  const { t: translate } = useTranslation(['contact', 'common']);

  return (
    <>
      <Head>
        <title>LL Regnskab - Contact</title>
      </Head>
      <PageLayout>
        <div className={introStyles.container}>
          <h1 className={introStyles.title}>{translate('contact_us')}</h1>
        </div>
        <div className={cardStyles.Container}>
          <ContactCard
            name='Qaqortoq'
            image='/images/office.jpg'
            phone='(+299)641603'
            email='laila@llregnskab.com'
            address='Sanatorievej B 1004, 3920 Qaqortoq'
            cvr={true}
          />
          <ContactCard
            name='Nuuk'
            image='/images/officeNuuk.jpg'
            email='niviaq@llregnskab.com'
            address='Jens Kreutzmannip Aqq. 4, 1.Sal, 3900 Nuuk'
            cvr={true}
          />
          <ContactCard
            name='Laila Lund'
            image='/images/employees/Laila-Lund.jpg'
            phone='(+299)530703'
            email='laila@llregnskab.com'
            department='Qaqortoq'
          />
          <ContactCard
            name='Stine Semsen'
            image='/images/employees/Stine-Semsen.jpg'
            email='stine@llregnskab.com'
            department='Qaqortoq'
          />
          <ContactCard
            name='Pitti Semsen'
            image='/images/employees/Pitti-Semsen.jpg'
            email='pitti@llregnskab.com'
            department='Qaqortoq'
          />
          <ContactCard
            name='Niviaq A. Petersen'
            image='/images/employees/Niviaq-Petersen.jpg'
            email='niviaq@llregnskab.com'
            department='Nuuk'
          />
          <ContactCard
            name='Sikkersoq Berthelsen'
            image='/images/employees/Sikkersoq-Berthelsen.jpg'
            email='sikkersoq@llregnskab.com'
            department='Qaqortoq'
          />
        </div>
      </PageLayout>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
    ...(await serverSideTranslations(locale, ['contact', 'common'])),
    },
  }
}