import PropTypes from 'prop-types';

function MovieDetail({ movieImg, title, rating, running, desc }) {
  return (
    <div>
      <img src={movieImg} alt={title} />
      <h1>{title}</h1>
      <div>
        <h4>{`⭐️${rating}`}</h4>
        <h4>{`🔴${running} mins`}</h4>
      </div>

      <p>{desc}</p>
    </div>
  );
}
MovieDetail.propTypes = {
  movieImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};
export default MovieDetail;
