import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieItem from '../MovieItem/MovieItem';
import Header from '../Header/Header';
import Details from '../Details';


function App() {

  return (
    <div className="App">
      <Router> 
        <Header />
      
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route exact path="/details">
          <Details />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;