import React,{useState} from 'react'
import {Container,Form,FormControl,Button,Navbar,Nav} from 'react-bootstrap'
import './Header.css'
export const Header = () => {
const [search,setSearch]=useState("");
const handleOnChange=(e)=>{
  const {value} = e.target;
  console.log(value);
}
const handleOnSubmit = (e)=>{
  e.preventDefault();
  alert("Got the search term")
}
  return (
    <div >
      <Navbar className='infoSection' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">
    <box-icon type='solid' name='movie-play'></box-icon>
      MovieClub</Navbar.Brand>
      <Form className="d-flex mx-auto" onSubmit={handleOnSubmit}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleOnChange}
          required
        />
        <Button variant="outline-success" type='submit'>Search</Button>
      </Form>

  </Container>
</Navbar>
    </div>
  )
}
