import PropTypes, { symbol } from 'prop-types';
import styles from './MovieDetail.module.css';

function MovieDetail({ movieImg, title, rating, running, genres, desc }) {
  return (
    <div className={styles.detail}>
      <div className={styles.outline}>
        <div>
          <img className={styles.movieCover} src={movieImg} alt={title} />
        </div>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <h4>{`\trating: ${rating}`}</h4>
          <h4>{`\trunning time: ${running} mins`}</h4>
          {genres ? (
            <div className={styles.genres}>
              {genres.map((g) => (
                <span key={g}>#{g} </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <main className={styles.main}>{desc}</main>
    </div>
  );
}
MovieDetail.propTypes = {
  movieImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  running: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};
export default MovieDetail;
