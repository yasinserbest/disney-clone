import "./NewDisney.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewDisney = (props) => {
  const movies = useSelector((state) => state.movie.newDisney);

  return (
    <div className="newDisney__container">
      <h4>New to Disney+</h4>
      <div className="news">
        {movies &&
          movies.map((movie, key) => (
            <div className="new" key={key}>
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
export default NewDisney;
