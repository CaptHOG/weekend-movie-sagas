import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";


function MovieItem({movie}) {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const handleDetailsView = () => {
    dispatch({
      type: 'SAGA/FETCH_DETAILS',
      payload: movie.id
    });
    history.push('/details')
  }

  return (
    <>
      {/* <button onClick={handleMovieListView}>Back to List</button> */}
      <div key={movie.id} >
        <h3>{movie.title}</h3>
        <img src={movie.poster} alt={movie.title} onClick={handleDetailsView}/>
      </div>
    </>
  )
}


export default MovieItem;