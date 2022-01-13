import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { nominalTypeHack } from 'prop-types';

// async-await 사용
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year',
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  //[docs] https://yts.mx/api
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              {movie.hasOwnProperty('genres') ? (
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
    // movie.genres.map() 에서 g는 고유한 값이므로 key 값으로 써도 된다.

    // movie api 중 genres 부분을 li 로 보여주는 부분에서
    // genres가 없는 영화가 포함되어 있는 경우가 있으므로
    // uncaught TypeError: Cannot read properties of undefined(reading 'map)
    // 에러가 발생하는 경우가 생긴다.

    // ===> hasOwnProperty() 함수를 이용하여 genres key가 있는지 확인하는 과정이 필요하다.
  );
}

export default App;
