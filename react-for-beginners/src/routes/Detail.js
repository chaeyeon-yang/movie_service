import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieDetail from '../components/MovieDetail';
import styles from './Detail.module.css';

// useParams 함수는 url에 있는 값 중 변경된 값을 반환해주는 함수이다.
function Detail() {
  const [loading, setLoading] = useState(true);
  const [contents, setContents] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setContents(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <MovieDetail
            id={contents.id}
            movieImg={contents.medium_cover_image}
            title={contents.title_long}
            rating={contents.rating}
            running={contents.runtime}
            genres={contents.genres}
            desc={contents.description_full}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
