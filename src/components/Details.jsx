import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";



function Details() {
  const details = useSelector(store => store.details);
  console.log(details)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: 'FETCH_MOVIES'
    })
  }, [])

  const goBack = (event) => {
    event.preventDefault();
    history.push('/')
  }


  return (
    <>
      <h1>Details</h1>
      <button onClick={goBack}>Back</button>
      {details.map(movie => {
        return (
          <>
            <h2>{movie.title}</h2>
            {movie.genres.map(genre => {
              return (
                <div>{genre}</div>
              )
            })}
            <img src={movie.poster}/>
            <p>{movie.description}</p>
          </>
        )
      })}
    </>
  )
}


export default Details;