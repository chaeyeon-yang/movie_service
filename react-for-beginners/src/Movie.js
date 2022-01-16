function Movie(medium_cover_image, title, summary, genres) {
  return (
    <div>
      <img src={medium_cover_image} />
      <h2>{title}</h2>
      <p>{summary}</p>
      {hasOwnProperty('genres') ? (
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
export default Movie;
