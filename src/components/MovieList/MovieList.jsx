import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'


function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'SAGA/FETCH_MOVIES' });
    }, []);

    // "id" will be the specific movie.id to grab
    const handleDetailsView = (id) => {
        history.push(`/details/:${id}`);
    }

    return (
        <main>
            <h2>Click a movie to learn more about it!</h2>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => handleDetailsView(movie.id)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}


export default MovieList;