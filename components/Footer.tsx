import footerStyles from '@/styles/footer.module.css'
import { useTranslation } from 'next-i18next'

export function Footer() {
  const { t: translate } = useTranslation(['common']);
  return (
    <div className={footerStyles.container}>
      <p className={footerStyles.text}>
        LL Regnskab ApS | CVR nr: 12924453 | <a href="tel:+299641603">{translate('telephone')}(+299)641603</a>
      </p>
    </div>
  )
}