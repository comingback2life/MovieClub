import './App.css';
import { Header } from './components/Header/Header';
import { MovieList } from './components/MovieListing/MovieList';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
function App() {
  const [movieList, setMovieList]=useState([]);
  const  [warningAlert,setWarningAlert]=useState(false);
  const [category,setCategory]=useState("")
  const handleOnAddToList = (cat,movie)=>{
    const obj = {...movie,cat};
   !movieList.length && setMovieList([obj])
   const movieExists = movieList.find(item=>item.imdbID===movie.imdbID);
    if(movieExists){
      setWarningAlert(true);
    }else{
      setMovieList([...movieList,obj]);
    }
  }
  const handleOnDelete=(imdbID)=>{
    console.log(imdbID);
    const newFun = movieList.filter(x=>x.imdbID!==imdbID);
    setMovieList(newFun);
  }

  return (
    <div className='wrapper'>
         {
        warningAlert? (<Alert variant="danger" onClose={() => setWarningAlert(false)} dismissible>
       <p className='text-center'>Item already added to a list</p>
      </Alert>):''
      }
      <Header func={handleOnAddToList} handleOnDelete={handleOnDelete}/>

      <MovieList func={handleOnAddToList} moviesList={movieList} handleOnDelete={handleOnDelete} setCategory={setCategory}/>
    </div>
  );
}

export default App;
