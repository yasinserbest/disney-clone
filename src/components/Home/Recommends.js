import "./Recommends.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Recommends = (props) => {
  const movies = useSelector((state) => state.movie.recommend);
  return (
    <div className="recommends__container">
      <h4>Recommended for you</h4>
      <div className="recommends">
        {movies &&
          movies.map((movie, key) => (
            <div className="recommend" key={key}>
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
export default Recommends;
