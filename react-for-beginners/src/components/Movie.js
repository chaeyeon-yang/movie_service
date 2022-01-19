import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function Movie({ id, coverImg, title, summary, genres }) {
  // 모든 이미지 element들은 alt 속성을 가짐
  return (
    <div className={styles.movie}>
      <div>
        <img className={styles.movie__img} src={coverImg} alt={title} />
      </div>
      <div>
        <div className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </div>

        <p className={styles.movie__summary}>
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
