import React from 'react'
import {Card,Button, Col} from 'react-bootstrap'
export const CustomCard = ({movie,func,btnDelete,handleOnDelete}) => {
  const generateCard=movie=>{
    return(

    
    <Card style={{ width: '18rem' }}>
      {
        movie.Poster==='N/A' ? <div class='text-center display-3'>No Image Found</div> :  <Card.Img variant="top" src={movie?.Poster} height="300px"/>
      }
    <Card.Body>
      <Card.Title className='text-center'>{movie?.Title}</Card.Title>
      <Card.Text>
        {
          movie?.imdbRating ? <span>IMDB Rating: <b>{movie.imdbRating}</b></span>:''
        }
         {
          movie?.Director ? <span className='d-block'>Directed By : <b>{movie.Director}</b></span >:'N/A'
        }
         {
          movie?.Writer ? <span className='d-block'>Written By : <b>{movie.Writer}</b></span>:'N/A'
        }
      </Card.Text>
      {btnDelete? ( <Button variant="btn w-100 btn-outline-danger" onClick={()=>handleOnDelete(movie.imdbID)}><box-icon name='trash'></box-icon></Button>) : (
        <div className="d-flex justify-content-between">
        <Button variant="btn btn-outline" onClick={()=>func("Like",movie)}><box-icon name='like'></box-icon></Button>
        <Button variant="btn btn-outline" onClick={()=>func("DisLike",movie)}><box-icon name='dislike' ></box-icon></Button>
        </div>
      )}
        
   
    </Card.Body>
  </Card>
  
    ) 
  }
  return (
   
    <Col sm="12" md="6" lg="4" xl="3">
    {
      movie?.Poster && movie?.Title && movie?.imdbRating ? generateCard(movie) : ''
    }
    </Col>


 
   
  )
}
