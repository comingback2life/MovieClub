import React from 'react'
import {Container,Form,FormControl,Button,Navbar,Nav} from 'react-bootstrap'
import './Header.css'
export const Header = () => {
  return (
    <div >
      <Navbar className='infoSection' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">
    <box-icon type='solid' name='movie-play'></box-icon>
      MovieClub</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
