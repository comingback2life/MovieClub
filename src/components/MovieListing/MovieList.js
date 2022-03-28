import React from 'react'
import { CustomCard } from '../Card/CustomCard';
import {Button,ButtonGroup, Row,Col} from 'react-bootstrap'
export const MovieList = () => {
  return (
    <div>
    <Row>
      <Col>
      <div className='filter d-flex justify-content-between py-3 px-3'> 
    <ButtonGroup aria-label="Basic example">
    <Button variant="warning">All</Button>
    <Button variant="primary">Happy</Button>
    <Button variant="danger">Sad</Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Basic example">
    <Button variant="primary">Grid</Button>
    <Button variant="secondary">List</Button>
  </ButtonGroup>
</div>
      </Col>
    
   
      <Col className='d-flex justify-content-center py-5 '>
      <CustomCard/>
    <CustomCard/>
    <CustomCard/>
    <CustomCard/>
      </Col>
      </Row>
   
    </div>


  )
}
