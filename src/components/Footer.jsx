import React from 'react'
import {Card,ListGroupItem,ListGroup} from 'react-bootstrap'
const Footer = () => {
  return (
    <>
    <Card style={{ width: '18rem' ,margin:'auto' }}>
  <Card.Img variant="top" src="https://cdn.dribbble.com/users/1790153/screenshots/13759046/media/0422e3965fb5e5c601886d543f2b6c65.png" />
  <Card.Body >
    <Card.Title>Contact Us</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><i class="fa-brands fa-facebook"></i></ListGroupItem>
    <ListGroupItem><i class="fa-brands fa-instagram"></i></ListGroupItem>
    <ListGroupItem><i class="fa-brands fa-twitter-square"></i></ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
</>
  )
}

export default Footer
