//import { Card } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import cardStyles from '@/styles/cards.module.css'

type CardProps = {
  name: string,
  image: string,
  email: string,
  phone?: string,
} & Partial<EmployeeCards & OfficeCards>

type EmployeeCards = {
  department?: string,
}

type OfficeCards = {
  address: string,
  cvr: boolean,
}

export function ContactCard({ name, image, email, phone, department, address, cvr }: CardProps) {
  const cvrNumber = cvr? "CVR nr: 12924453" : null;
  const addressLink = name === 'Nuuk' ? 
    'https://www.google.com/maps/place/Tumi+Consulting+ApS/@64.1719139,-51.7370675,19z/data=!3m1!4b1!4m5!3m4!1s0x4ea20fee844f428d:0xfcb56976bf831965!8m2!3d64.1719139!4d-51.7365203' 
    : 'http://maps.google.com/?q=1004%20Sanatorievej';
  return (
    <Card className={cardStyles.Card}>
      <Card.Img
        variant="top"
        alt="Image"
        src={image}
      />

      <Card.Body>
        <Card.Title className={cardStyles.Title}>{name}</Card.Title>

        <Card.Text>
          <Card.Link className={cardStyles.Link} href={`mailto:${email}`}>
            Email: {email}
          </Card.Link>
          
        {phone != null && (
          <>
          <br />
            <Card.Link className={cardStyles.Link} href={`tel:${phone}`}>
              Phone: {phone}
            </Card.Link>
        </>
        )}

        {address != null && (
          <>
            <br />
            <Card.Link className={cardStyles.Link} href={addressLink} target='_blank' rel='noreferrer'>
              Address: {address}
            </Card.Link>
          </>
        )}

        {department!= null && (
          <>
          <br />
          <i className={cardStyles.Text}>Department: {department}</i>
        </>
        )}

        {cvrNumber != null && (
          <>
            <br />
            <i className={cardStyles.Text}>{cvrNumber}</i>
          </>
        )}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}