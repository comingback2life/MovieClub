import axios from 'axios';
const apiEndPoint = `https://www.omdbapi.com/?apiKey=f113b653&`

export const fetchMovies=(title)=>{
  try{
    const res = axios.get(`${apiEndPoint}t=${title}`);
    return res;
  }catch(e){
    return e.message;
  }
  
}