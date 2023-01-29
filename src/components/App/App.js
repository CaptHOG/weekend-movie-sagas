import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieItem from '../MovieItem/MovieItem';
import Header from '../Header/Header';


function App() {

  return (
    <div className="App">
      <Router> 
        <Header />
      
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route exact path="/details/:id">
          <MovieItem />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;