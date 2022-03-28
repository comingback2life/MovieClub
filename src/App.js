import './App.css';
import { Header } from './components/Header/Header';
import { CustomCard } from './components/Card/CustomCard';
import { MovieList } from './components/MovieListing/MovieList';
function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <CustomCard/>
      <MovieList/>
    </div>
  );
}

export default App;
