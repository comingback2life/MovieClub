import React,{useState} from 'react'
import {Container,Form,FormControl,Button,Navbar, Row, Col} from 'react-bootstrap'
import { fetchMovies } from '../../helpers/axiosHelper';
import { CustomCard } from '../Card/CustomCard';
import './Header.css'
export const Header = ({func}) => {
const [search,setSearch]=useState("");
const [movie,setMovie]=useState({});
const handleOnChange=(e)=>{
  const {value} = e.target;
  setSearch(value);
}
const handleOnSubmit = async (e)=>{
  e.preventDefault();
  const movie = await fetchMovies(search);
  setMovie(movie.data)
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
<Row>
    <Col className='d-flex justify-content-center'>
    <CustomCard movie={movie} func={func}/>
    </Col>
</Row>

    </div>
  )
}
