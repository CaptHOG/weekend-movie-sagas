import { useHistory } from "react-router-dom";


function MovieItem() {

  const history = useHistory();

  const handleMovieListView = () => {
    
    history.push('/')
  };

  return (
    <>
      <button onClick={handleMovieListView}>Back to List</button>
    </>
  )
}


export default MovieItem;