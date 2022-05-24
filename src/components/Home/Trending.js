import "./Trending.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Trending = (props) => {
  const movies = useSelector((state) => state.movie.trending);

  return (
    <div className="trends__container">
      <h4>Trends</h4>
      <div className="trends">
        {movies &&
          movies.map((movie, key) => (
            <div className="trend" key={key}>
              {movie.id}
              <Link to={"/detail/" + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Trending;
