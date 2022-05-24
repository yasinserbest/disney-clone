import "./Originals.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Originals = (props) => {
  const movies = useSelector((state) => state.movie.original);

  return (
    <div className="originals__container">
      <h4>Originals</h4>
      <div className="originals">
        {movies &&
          movies.map((movie, key) => (
            <div className="original" key={key}>
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
export default Originals;
/**
 * s
 */
