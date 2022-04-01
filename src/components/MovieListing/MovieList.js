import {React,useState} from 'react'
import { CustomCard } from '../Card/CustomCard';
import {Button,ButtonGroup, Row,Col} from 'react-bootstrap'
import { ListItem } from '../../list-item/ListItem';
export const MovieList = ({handleOnDelete,moviesList,setCategory}) => {
  const [displayView, setDisplayView]=useState("Grid");
  return (
    <div>
    <Row>
      <Col>
      <div className='filter d-flex justify-content-between py-3 px-3'> 
    <ButtonGroup aria-label="Basic example">
    <Button variant="warning" onClick={()=>setCategory("")}>All</Button>
    <Button variant="primary" onClick={()=>setCategory("Like")}>Liked</Button>
    <Button variant="danger" onClick={()=>setCategory("DisLike")}>Disliked</Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Basic example">
    <Button variant="primary" onClick={()=>setDisplayView("Grid")}>Grid</Button>
    <Button variant="secondary" onClick={()=>setDisplayView("List")}>List</Button>
  </ButtonGroup>
</div>
      </Col>
    
  
      </Row>
   <Row>
          
     {
       moviesList.map((movie,index)=> {
         return(
           displayView==="Grid"? (  <CustomCard movie={movie} key={index} handleOnDelete={handleOnDelete} btnDelete={true}/>) : (  <ListItem movie={movie} key={index} handleOnDelete={handleOnDelete} btnDelete={true}/>)
         )
       }
     
        )
      }
     
      
   </Row>
    </div>


  )
}
